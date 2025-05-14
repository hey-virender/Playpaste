import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaGoogle, FaClipboardList } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";

const HowItWorks = () => {
    const cardDetails = [
        {
            title: "Login with Google",
            icon: <FaGoogle className="text-yellow-500 text-6xl" />,
        },
        {
            title: "Paste your song list",
            icon: <FaClipboardList className="text-green-500 text-6xl" />,
        },
        {
            title: "Create Playlist",
            icon: <RiPlayListFill className="text-purple-500 text-6xl" />,
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-[#0f0f0f] to-black text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 ">
                How <span className="text-yellow-400">PastePlay</span> Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-2">
                {cardDetails.map((card, index) => (
                    <Card
                        key={index}
                        className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4  lg:h-[300px] bg-[#1f1f1f] border border-zinc-700 rounded-2xl hover:shadow-lg transition duration-300 text-center"
                    >
                        <CardHeader className="flex items-center justify-center pt-8">
                            <div className="mb-4">{card.icon}</div>

                        </CardHeader>
                        <CardContent>
                            <h2 className="scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0">
                                {card.title}
                            </h2>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
