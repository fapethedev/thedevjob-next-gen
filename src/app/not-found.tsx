import React from "react";
import Link from 'next/link';
import {Metadata} from "next";


import {cn} from "@/lib/utils";
import {exo2, orbitron} from "@/app/font";
import {Section} from "@/components/ui/section";
import {Button} from "@/components/ui/button";


export const metadata: Metadata = {
    title: {
        absolute: '404 - Not Found'
    },
};

export default function NotFound() {
    return (
        <main className={cn(exo2.className)}>
            <Section className="w-full md:h-screen justify-center content-center">
                <div className="justify-center text-center items-center mx-auto my-auto space-y-2 gap-y-8 py-28 md:py-0 md:mb-48">
                    <div className="flex flex-col gap-y-2">
                        <h1 className=" justify-center items-center flex flex-col gap-y-0 text-5xl md:text-7xl uppercase font-bold text-primary-alt dark:text-secondary tracking-tight">
                            <span className="w-16 h-16 md:w-32 md:h-32 md:-mb-6 flex flex-col justify-center items-center">
                                404
                            </span>
                            Not Found
                        </h1>
                        <p className="text-base md:text-lg font-normal text-primary dark:text-slate-500 tracking-normal">
                            Could not find requested resource
                        </p>
                    </div>

                    <Button type="button" variant="default"
                            className={cn("font-semibold uppercase", orbitron.className)}>
                        <Link href="/">
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </Section>
        </main>
    );
}