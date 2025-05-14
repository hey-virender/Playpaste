import {NextRequest,NextResponse} from "next/server";
import {getToken} from "next-auth/jwt"
import {getYouTubeInstance} from "@/lib/youtube";
import {getValidAccessToken} from "@/utils/auth";


export async function GET(req:NextRequest){
    try {
        const accessToken = await getValidAccessToken(req);
        if (!accessToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const youtube = await getYouTubeInstance(accessToken as string)
        const response = await youtube.playlists.list({
            part:["snippet"],
            mine:true,
            maxResults:10,
        })
        const playlists = response.data.items || []
        return NextResponse.json({success:true,playlists},{status:200})
    }catch (error){
        console.error("Error during YouTube API operations:",error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}