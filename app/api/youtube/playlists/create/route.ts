import {NextRequest, NextResponse} from "next/server";

import {getYouTubeInstance} from "@/lib/youtube";
import {getValidAccessToken} from "@/utils/auth";

export async function POST(req:NextRequest){
    try {
        const accessToken = await getValidAccessToken(req);
        if (!accessToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const {title,description,privacyStatus,tags} = await req.json();

        if(!title){
            return new Response("Title is required",{status:400})
        }
        const youtube =  getYouTubeInstance(accessToken as string)
        const existingPlaylists = await youtube.playlists.list({
            part:["snippet"],
            mine:true,
            maxResults:50,
        })
        const playlistExists = existingPlaylists?.data?.items?.find(playlist => playlist?.snippet?.title === title)
        if(playlistExists){
            return NextResponse.json({success:false,message:"Playlist with same name already exists"})
        }
        const response = await youtube.playlists.insert({
            part:["snippet","status"],
            requestBody:{
                snippet:{
                    title,
                    description: description || "Created via PastePlay",
                    tags:tags || []
                },
                status:{
                    privacyStatus : privacyStatus || "private"
                }
            }
        })
        const playlistId = response.data.id;
        return NextResponse.json({success:true,playlistId,message:"Playlist created successfully"},{status:201})
    }catch(error){
        console.error("Error during YouTube API operations:",error)
        return NextResponse.json({success:false,message:"Internal Server Error"},{status:500})

    }
}