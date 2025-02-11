import * as React from "react";
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaUpwork, FaWhatsapp} from "react-icons/fa6";
import {PiGearDuotone} from "react-icons/pi";


import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {orbitron} from "@/app/font";


const SocialMedia = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(
    (
        {className, ...props},
        ref
    ) => (
        <div
            ref={ref}
            className={cn("flex items-center justify-center py-8 gap-x-9 text-4xl text-primary-alt dark:text-secondary md:py-10 md:gap-x-10 md:text-4xl lg:py-4 lg:gap-x-12 lg:text-3xl", className)}
            {...props}
        >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://www.linkedin.com/in/abiola-fatigba-a0532a27b/" target="_blank">
                            <FaLinkedinIn/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent
                        className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://www.upwork.com/freelancers/" target="_blank">
                            <FaUpwork/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent
                        className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>UpWork</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://www.usebraintrust.com/" target="_blank">
                            <PiGearDuotone/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent
                        className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>Braintrust</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://github.com/fapethedev/" target="_blank">
                            <FaGithub/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent
                        className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>Github</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="/" target="_blank">
                            <FaWhatsapp/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent
                        className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>Whatsapp</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
);

SocialMedia.displayName = "SocialMedia";

export default SocialMedia;