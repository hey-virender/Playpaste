import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import {refreshAccessToken} from "@/lib/refresh-token";





export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope:
                        "openid email profile https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl",
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token ?? token.refreshToken;
                token.expiresAt = account.expires_at
                    ? account.expires_at * 1000
                    : Date.now() + 3600 * 1000;
                return token;
            }
            if(Date.now() < Number(token.expiresAt)){
                return token;
            }
            try{
                const refreshed = await refreshAccessToken(token.refreshToken as string)
                token.accessToken = refreshed.accessToken;
                token.expiresAt = refreshed.expiresAt;
                token.refreshToken = refreshed.refreshToken;
                return token;

            }catch (err){
                console.log("JWT refresh error",err)
                return {
                    ...token,
                    error: "Refresh token error"
                }
            }
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            session.error = token.error as string;
            return session;

        },
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
};

// Step 2: Export GET and POST for app router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export default authOptions;