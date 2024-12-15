import React from "react";
import {ReactNode} from "react";
import {motion} from "framer-motion";
import {TbAtom2} from "react-icons/tb";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {cn} from "@/lib/utils";
import {orbitron} from "@/app/font";


const BreadcrumbNavLink = ({href, children}: { href: string, children: ReactNode }) => (
    <BreadcrumbLink
        href={href}
        className={cn("text-sm lg:text-base text-primary-alt hover:border-b-2 hover:border-b-primary-alt dark:text-secondary hover:dark:border-b-secondary-alt p-0.5 uppercase font-semibold", orbitron.className)}
    >
        {children}
    </BreadcrumbLink>
);

const BreadcrumbNavSeparator = () => (
    <BreadcrumbSeparator>
        <motion.div
            animate={{rotate: 360}}
            transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear",
            }}
            className="text-primary-alt dark:text-secondary text-sm lg:text-base"
        >
            <TbAtom2/>
        </motion.div>
    </BreadcrumbSeparator>
);


export default function BreadcrumbNav({pathname}: { pathname: string }) {
    const paths = pathname.split("/").filter((segment) => segment);

    return (
        <Breadcrumb className="ml-6 items-center">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbNavLink href="/">
                        Home
                    </BreadcrumbNavLink>
                </BreadcrumbItem>
                <BreadcrumbNavSeparator/>

                {paths.map((path, index) => {
                    const href = "/" + paths.slice(0, index + 1).join("/");

                    const link = path.replace(/-/g, " ")
                        .replace(/\b\w/g, c => c.toUpperCase());

                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {index < paths.length - 1 ? (
                                    <BreadcrumbNavLink href={href}>
                                        {link}
                                    </BreadcrumbNavLink>
                                ) : (
                                    <BreadcrumbPage
                                        className={cn("text-sm lg:text-base text-slate-500 dark:text-slate-400 uppercase border-b-2 border-b-slate-500 dark:border-b-slate-400 p-0.5", orbitron.className)}>
                                            {link}
                                    </BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {index < paths.length - 1 && (
                                <BreadcrumbNavSeparator/>
                            )}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>

    );
}