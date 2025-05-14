'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {  useState,useEffect, } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import PlaylistSelector from "@/components/PlaylistSelector";
import CreationLoader from "@/components/CreationLoader";
import {toast} from "sonner";


const Page = () => {
    const { data: session, status } = useSession();

    const router = useRouter();
    const [input, setInput] = useState('');
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistIds, setSelectedPlaylistIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);



    // Redirect if user is unauthenticated
    useEffect(() => {
        if (status === 'unauthenticated') {
            toast.error("You must be logged in to create playlists");
            router.push('/login');
        }
    }, [status, router]);
    async function getPlaylists() {
        try {
            const result = await axios.get("/api/youtube/playlists");
            console.log(result.data);
            setPlaylists(result.data.playlists);
        } catch (error) {
            toast.error("Error fetching playlists");
            console.error("Error fetching playlists", error);
        }
    }
    // Fetch playlists when authenticated
    useEffect(() => {
        if (status === 'authenticated' && session) {

            (async function() {
                await getPlaylists()
            })()
        }
    }, [ session]);
    if (status === 'loading') {
        //add skeleton
        return <div>Loading...</div>;
    }
    // Handle form submission to create playlists
    async function handleSubmit() {
        const prompt = input.trim();
        if (!prompt) {
            toast.error("Please enter a prompt");
            return;
        }
        setIsLoading(true)


        try {

             await axios.post("/api/youtube/create", {
                prompt,
                playlistIds: selectedPlaylistIds,

            });
            toast.success("Playlist created successfully");
            setInput('');
            setSelectedPlaylistIds([]);

        } catch (e) {
            toast.error("Error creating playlist");
            console.log(e);
        }finally {
            setIsLoading(false);
        }
    }
    async function handleCreatePlaylist(title:string, description:string, privacyStatus:string,tags:string[]):Promise<void> {
       try {
           const result = await axios.post("/api/youtube/playlists/create", {
               title,
               description,
               privacyStatus,
               tags
           });
           toast.success("Playlist created successfully");
           await getPlaylists();
       }
       catch (e) {
           console.log(e);
           toast.error("Error creating playlist");
       }
    }
    return (
        isLoading? <CreationLoader/>:<div className=" md:grid md:grid-cols-3 md:gap-24 ">

           <div className="col-span-2">
               <Label className={"text-lg"}>Enter your prompt/playlist</Label>
               <Textarea
                   className="text-white h-[15vh] sm:h-[30vh] lg:h-[50vh] resize-none  placeholder:text-muted-foreground mt-4"
                   placeholder="Paste your playlist here"
                   onChange={(e) => setInput(e.target.value)}
               />
               <Button className={"my-7 lg:w-32 lg:px-4 lg:py-1"} onClick={handleSubmit}>Generate Playlist</Button>
           </div>
            <div className="h-44 col-span-1 md:h-[90vh]"><PlaylistSelector
                playlists={playlists}
                onChange={setSelectedPlaylistIds}
                onCreate={handleCreatePlaylist}
            /></div>

        </div>
    );
};

export default Page;
