import axios from "axios";

export async function refreshAccessToken(refreshToken:string){
    try {
        const response = await axios.post("https://oauth2.googleapis.com/token",
            new URLSearchParams({
                client_id:process.env.GOOGLE_CLIENT_ID!,
                client_secret:process.env.GOOGLE_CLIENT_SECRET!,
                refresh_token: refreshToken,
                grant_type: "refresh_token",
            }),{
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }}
        )
        const tokens = response.data;
        return {
            accessToken: tokens.access_token,
            expiresAt: Date.now() + (tokens.expires_in * 1000),
            refreshToken: tokens.refresh_token ?? refreshToken
        }
    }catch(error:unknown){
        console.error("Google OAuth Token Refresh Error:", error);

        throw error;
    }
}