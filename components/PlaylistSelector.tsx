'use client';
import React, { useState } from 'react';
import { TagInput, type Tag } from 'emblor';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Playlist } from "@/types/types";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter, DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,

    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

interface PlaylistSelectorProps {
    playlists: Playlist[];
    onChange: (ids:string[]) => void;
    onCreate: (title:string,description:string,privacyStatus:string,tags:string[]) => void;
}

const PlaylistSelector = ({ playlists, onChange, onCreate }: PlaylistSelectorProps) => {
    const defaultTags = [{
        id:"1",
        text:"Pasteplay"

    }];
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('Created via Pasteplay');
    const [privacyStatus, setPrivacyStatus] = useState('');
    const [tags, setTags] = useState<Tag[]>(defaultTags);
    const [activeTagIndex, setActiveTagIndex] = useState < number | null > (null);

    const handleCheckboxChange = (playlistId: string, checked: boolean) => {
        const updated = checked
            ? [...selectedIds, playlistId]
            : selectedIds.filter(id => id !== playlistId);
        setSelectedIds(updated);
        onChange(updated);
    };

    const handleCreatePlaylist = () => {
        const finalTags = tags.map(tag => tag.text);
        if(title === '') return;
        if(privacyStatus === '') return;

        onCreate(title, description, privacyStatus, finalTags);
        setTitle('');
        setDescription('Created via Pasteplay');
        setPrivacyStatus('');
        setTags(defaultTags);
        setActiveTagIndex(null);
        setDrawerOpen(false);
    }


    return (
        <div className="h-full space-y-4">
            <Label className="text-xl font-semibold mb-5">Select Playlists</Label>
            <div className="flex h-full sm:h-3/4 overflow-y-auto flex-col gap-3">
                {playlists.map(playlist => (
                    <div key={playlist.id} className="grid grid-cols-3
          gap-4 items-center justify-center-safe">
                        <Image width={100} height={100} className="w-14 h-7 sm:w-18 sm:h-10 rounded-lg object-cover" src={playlist?.snippet?.thumbnails?.default?.url!}  alt={playlist.snippet.title}/>
                        <Label className={"sm:text-lg "} htmlFor={playlist.id}>{playlist.snippet.title}</Label>
                        <Checkbox
                            className="h-6 w-6 sm:h-8 sm:w-8"
                            id={playlist.id}
                            checked={selectedIds.includes(playlist.id)}
                            onCheckedChange={(checked) =>
                                handleCheckboxChange(playlist.id, checked as boolean)}/>

                    </div>
                ))}
            </div>

            <div className="flex items-center gap-5 sm:mt-8 text-white bg-black">
                <Label htmlFor="newPlaylist" className="text-lg font-semibold">
                    Or Create New Playlist
                </Label>
                <Dialog open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DialogTrigger asChild>
                        <Button  className={""} onClick={()=>setDrawerOpen(true)} variant="outline">New Playlist</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[455px]">
                        <DialogHeader>
                            <DialogTitle>Create New Playlist</DialogTitle>
                            <DialogDescription>
                                Enter a title for your new playlist.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    className="col-span-3"
                                    onChange={(e)=>setTitle(e.target.value)}
                                    placeholder="Enter a title"
                                    value={title}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Input
                                    id="description"

                                    className="col-span-3"
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="tags" className="text-right">
                                    Tags
                                </Label>
                               <TagInput
                                id="tags"
                                className="w-2/3" // This is the outer container
                                styleClasses={{
                                    input: 'w-full sm:w-[400px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black',
                                    inlineTagsContainer: 'flex flex-wrap gap-1 overflow-y-auto md:max-h-44 lg:max-h-52',

                                }}
                                placeholder="Enter tags"
                                tags={tags}
                                setTags={(newTags) =>  setTags(newTags)}
                                activeTagIndex = {
                                    activeTagIndex
                                }
                                setActiveTagIndex = {
                                    setActiveTagIndex
                                }

                               />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="privacyStatus" className="text-right">
                                    Privacy
                                </Label>
                                <Select required={true} value={privacyStatus} onValueChange={setPrivacyStatus} >
                                    <SelectTrigger className="col-span-3 w-full" >
                                        <SelectValue placeholder="Choose a privacy status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="private">Private</SelectItem>
                                            <SelectItem value="public">Public</SelectItem>
                                            <SelectItem value="unlisted">Unlisted</SelectItem>

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" className={"bg-black text-white"} onClick={handleCreatePlaylist}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default PlaylistSelector;
