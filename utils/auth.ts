
import { refreshAccessToken } from "@/lib/refresh-token"; // your existing function
import { getToken } from "next-auth/jwt";
import {NextRequest} from "next/server";

export async function getValidAccessToken(req: NextRequest): Promise<string | null> {
    const token = await getToken({ req });

    if (!token) return null;

    if (Date.now() < Number(token.expiresAt)) {
        return token.accessToken as string;
    }

    try {
        const refreshed = await refreshAccessToken(token.refreshToken as string);
        return refreshed.accessToken;
    } catch (err) {
        console.error("Token refresh failed", err);
        return null;
    }
}
