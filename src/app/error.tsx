"use client";

import React, {useEffect} from "react";
import Link from "next/link";


import {exo2, orbitron} from "@/app/font";
import {cn} from "@/lib/utils";
import {Section} from "@/components/ui/section";
import {Button} from "@/components/ui/button";


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <main className={cn(exo2.className)}>
            <Section className="w-full md:h-screen justify-center content-center">
                <div
                    className="justify-center text-center items-center mx-auto my-auto space-y-4 gap-y-8 py-28 md:space-y-2 md:py-0 md:mb-44">
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl capitalize font-bold text-primary-alt dark:text-secondary tracking-tight">
                            Oops something went wrong!
                        </h1>
                        <p className="text-base md:text-lg font-normal text-primary dark:text-slate-500 tracking-normal">
                            An unexpected error occurred, if the problem persist report it to{" "}
                            <span className="font-semibold tracking-tight">
                                <Link
                                    href="mailto:mpetrivlin@gmail.com"
                                    className="text-primary-alt/80 dark:text-slate-300 underline underline-offset-2 tracking-tight hover:underline-offset-4 hover:border-spacing-1 hover:text-primary-alt hover:dark:text-slate-400"
                                >
                                    Fapethedev
                                </Link>
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-4 gap-x-0 mx-auto mt-4 justify-center items-center md:flex-row md:gap-y-0 md:gap-x-4">
                        <Button
                            type="button"
                            variant="default"
                            onClick={() => reset()}
                            className={cn("font-semibold uppercase w-3/4 md:w-1/6", orbitron.className)}
                        >
                            Try Again
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className={cn("font-semibold uppercase w-3/4 md:w-1/6", orbitron.className)}
                        >
                            <Link href="/">
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
