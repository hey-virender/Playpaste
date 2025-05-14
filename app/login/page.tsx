'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGoogle } from 'react-icons/fa';
import { Label } from '@/components/ui/label';




const Page = () => {
    const { data: session } = useSession();

    return (
        <div className="min-h-screen flex mt-16 items-start  justify-center bg-gradient-to-br from-black via-[#121212] to-zinc-900 text-white px-4">
            <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center border border-zinc-700">
                {session ? (
                    <>
                        <div className="flex flex-col items-center space-y-4">
                            <Image
                                width={64}
                                height={64}
                                src={session.user?.image ?? ''}
                                alt="profile"
                                className="rounded-full border border-yellow-400"
                            />
                            <Label className="text-xl font-semibold">{session.user?.name}</Label>
                            <Button
                                onClick={() => signOut()}
                                className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                            >
                                Sign out
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-6">Welcome to <span className="text-yellow-400">PastePlay</span></h1>
                        <p className="mb-6 text-sm text-gray-300">Sign in to generate your YouTube playlists instantly.</p>
                        <Button
                            onClick={() => signIn('google')}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold flex items-center justify-center gap-2 py-3"
                        >
                            <FaGoogle className="text-lg" />
                            Sign in with Google
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
