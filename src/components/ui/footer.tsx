import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import {Separator} from "@/components/ui/separator";
import Logo from "@/components/ui/logo";
import {FaGithub, FaLinkedinIn, FaUpwork, FaWhatsapp} from "react-icons/fa6";
import {PiGearDuotone} from "react-icons/pi";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {exo2, orbitron} from "@/app/font";
import {HiDocumentDownload} from "react-icons/hi";

const FooterTop = () => (
    <div className="flex flex-col gap-y-24">
        <div className="w-full items-center lg:mb-16">
            <Link
                href=""
                download
                className="w-full h-16 lg:h-44 lg:text-7xl p-6 lg:p-12 rounded-md inline-flex items-center justify-between bg-gradient-to-r from-primary to-primary-alt text-secondary hover:from-primary-alt hover:to-primary-alt hover:shadow-sm dark:from-secondary dark:to-secondary-alt dark:hover:from-secondary-alt dark:hover:to-secondary-alt dark:text-primary dark:hover:text-slate-400"
            >
                <span className={cn("uppercase font-semibold", orbitron.className)}>
                    Download CV
                </span>
                <HiDocumentDownload
                    className="text-[40px] lg:text-[96px]"
                />
            </Link>
        </div>
        <div className={cn("pb-12 md:grid md:grid-cols-2 md:pb-14 lg:pb-16", exo2.className)}>
            <div className="capitalize text-justify text-lg md:text-left lg:text-6xl lg:text-justify font-bold mb-8 bg-gradient-to-r from-primary-alt to-primary dark:from-secondary dark:to-slate-400 text-transparent bg-clip-text">
                Meet with the most promising developer, <span className="hidden lg:inline-flex">software</span> engineer and intelligent systems and AI agents master
            </div>
            <div className="flex flex-row gap-x-5 text-primary-alt dark:text-slate-400 lg:mx-auto lg:gap-x-20">
                <div className="flex flex-col w-auto">
                    <p className="font-semibold mb-4 lg:text-lg">Latest Jobs</p>
                    <div className="flex flex-col gap-4 text-sm lg:text-base">
                        <p>TheDevJob</p>
                        <p>Full-Stack Developer</p>
                        <p>Mentor</p>
                    </div>
                </div>
                <div className="flex flex-col w-auto">
                    <p className="font-semibold mb-4 truncate lg:text-lg">Latest Tech</p>
                    <div className="flex flex-col gap-4 text-sm lg:text-base">
                        <Link href="https://www.theunwindai.com/" target="_blank">Unwind AI</Link>
                        <Link href="https://lancedb.com" target="_blank">LanceDB</Link>
                        <Link href="https://stackoverflow.co/teams/resources/introducing-overflowai/" target="_blank">OverflowAI</Link>
                    </div>
                </div>
                <div className="flex flex-col w-auto">
                    <p className="font-semibold mb-4 truncate lg:text-lg">Latest Projects</p>
                    <div className="flex flex-col gap-4 text-sm lg:text-base">
                        <Link href="#">NextGen</Link>
                        <Link href="#">Muriel</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FooterBottom = () => (
    <div className="flex flex-col pt-8 md:flex-row md:flex-1 md:items-center md:justify-between md:pt-10 lg:pt-12">
        <div className="flex items-start justify-start">
            <Logo className="lg:-m-1.5 lg:p-1.5"/>
        </div>
        <div
            className="flex items-center justify-center py-8 gap-x-9 text-4xl text-primary-alt dark:text-secondary md:py-10 md:gap-x-10 md:text-4xl lg:py-4 lg:gap-x-12 lg:text-3xl"
        >
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://www.linkedin.com/in/abiola-fatigba-a0532a27b/" target="_blank">
                            <FaLinkedinIn/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://www.upwork.com/freelancers/" target="_blank">
                            <FaUpwork/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>UpWork</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://www.usebraintrust.com/" target="_blank">
                            <PiGearDuotone/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>Braintrust</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="https://github.com/fapethedev/" target="_blank">
                            <FaGithub/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>Github</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="/" target="_blank">
                            <FaWhatsapp/>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn(orbitron.className, "bg-primary-alt text-slate-50 text-xs/2 dark:bg-secondary dark:text-primary-alt uppercase")}>
                        <p>Whatsapp</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </div>
);

export { FooterTop, FooterBottom };

export default function Footer() {
    return (
        <footer className="p-6">
            <FooterTop/>
            <Separator className="h-1 rounded-full w-full my-auto lg:h-0.5"/>
            <FooterBottom/>
        </footer>
    );
}

