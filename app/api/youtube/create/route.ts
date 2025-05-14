import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getYouTubeInstance } from "@/lib/youtube";
import { processPromptToSongs } from "@/lib/actions/processPromptToSongs";
import {getValidAccessToken} from "@/utils/auth";

export async function POST(req: NextRequest) {
    try {
        const accessToken = await getValidAccessToken(req);
        if (!accessToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const { prompt, playlistIds } = await req.json();





        const youtube = await getYouTubeInstance(accessToken as string);

        if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
            return NextResponse.json({ message: "Prompt is required." }, { status: 400 });
        }


        if (!playlistIds || !playlistIds.length) {
            return NextResponse.json({ message: "Playlist title must be provided if no playlist ID is given." }, { status: 400 });
        }






        // Process the prompt into song names
        const songs = await processPromptToSongs(prompt);

        // Add the songs to the playlist
        for (const song of songs) {
            const searchRes = await youtube.search.list({
                part: ["snippet"],
                q: song,
                maxResults: 1,
                type: ["video"],
            });

            const videoId = searchRes.data.items?.[0]?.id?.videoId;

            if (!videoId) {
                console.warn(`Video not found for song: ${song}`);
                continue;
            }

            for (const playlistId of playlistIds) {
                await youtube.playlistItems.insert({
                    part: ["snippet"],
                    requestBody: {
                        snippet: {
                            playlistId,
                            resourceId: {
                                kind: "youtube#video",
                                videoId,
                            },
                        },
                    },
                });
                //Added for avoiding rate limiting from youtube
                await new Promise((res) => setTimeout(res, 300));
            }
        }

        return NextResponse.json({ success: true, playlistIds,songsAdded:songs.length }, { status: 200 });
    } catch (error:unknown) {
        console.error("Error during YouTube API operations:", error);
        return NextResponse.json({ message: "Internal Server Error"}, { status: 500 });
    }
}
