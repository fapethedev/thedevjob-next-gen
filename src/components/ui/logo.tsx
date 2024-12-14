import Link from "next/link";
import {cn} from "@/lib/utils";
import {orbitron} from "@/app/font";

export default function Logo({className}: { className?: string }) {

    return (
        <>
            <Link href="/" className={cn("text-primary-alt dark:text-secondary font-semibold text-2xl md:text-5xl lg:text-2xl", orbitron.className, className)}>
                <span className="sr-only">Logo</span>
                <img
                    alt="FAPETHEDEV"
                    src="logo/logo-transparent.png"
                    className="hidden dark:flex h-10 md:h-12 lg:h-8 w-auto"
                />

                <img
                    alt="FAPETHEDEV"
                    src="logo/logo-grayscale-transparent.png"
                    className="flex dark:hidden h-10 md:h-12 lg:h-8 w-auto"
                />
            </Link>
        </>
    );
}