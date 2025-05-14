import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <section className={"hero text-center"}>
            <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl my-12 ">Turn Song Lists into Smart YouTube Playlists Instantly</h1>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Paste your favorite tracks, and we’ll generate a full YouTube playlist — AI-matched, accurate, and fast.</h4>
            <Link href="/create">
                <Button className={"mt-8 text-xl py-6 px-4"}>Get Started</Button>
            </Link>

        </section>
    );
};

export default Hero;
