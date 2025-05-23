'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import logo from "@/public/playpaste.png"
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";

const Header = () => {
    const {data: session} = useSession();
    return (
        <>
        <header className="flex justify-between items-center py-5 sm:py-3 ">
            <Link href="/"><Image src={logo} height={100} width={200} alt={"logo"} /></Link>
            <Link href="/login">
                {session ? <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage className="object-cover w-full h-full" src={session?.user?.image || ""} alt="user" />
                        <AvatarFallback >VC</AvatarFallback>

                    </Avatar>
                    <div className="text-lg font-semibold">{session.user?.name}</div>


                </div> :                <Button className="font-medium rounded-xl px-6 py-2 border-2 border-white">Login</Button>}
                    </Link>


        </header>
            <Separator/>
            </>
    );
};

export default Header;
