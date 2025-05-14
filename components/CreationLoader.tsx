import React from 'react';
import {Loader2} from "lucide-react";

const CreationLoader = () => {
    return (
        <div className={"pt-40"}>
            <div className="flex flex-col items-center justify-center gap-12 text-sm text-muted-foreground">
                <Loader2 className="h-24 w-24 md:h-32 md:w-32 animate-spin" />
                <span className={"text-md sm:text-xl md:text-2xl animate-pulse"}>Hold tight we are generating your playlist...</span>
            </div>
        </div>
    );
};

export default CreationLoader;
