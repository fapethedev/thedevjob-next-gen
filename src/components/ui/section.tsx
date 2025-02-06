'use client';

import React from "react";
import {motion} from "framer-motion";

import {cn} from "@/lib/utils";


interface GlobeSectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    description: string;
    children?: React.ReactNode;
}


const Section = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({className, children, ...props}, ref) => (
    <section
        ref={ref}
        className={cn("max-w-7xl rounded-md", className)}
        {...props}
    >
        {children}
    </section>
));

Section.displayName = 'Section';

const HeroSection = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({className, children, ...props}, ref) => (
    <Section
        ref={ref}
        className={cn("h-screen min-h-screen justify-center items-center z-0", className)}
        {...props}
    >
        {children}
    </Section>
));

HeroSection.displayName = 'HeroSection';

const GlobeSection = React.forwardRef<
    HTMLElement,
    GlobeSectionProps
>(({className, children, title, description, ...props}, ref) => (
    <Section
        ref={ref}
        className={cn("justify-center items-center z-0 flex flex-row bg-transparent relative w-full", className)}
        {...props}
    >
        <div className="mx-auto w-full relative overflow-hidden h-full md:h-[56rem] px-4">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="div"
                >
                    <h2 className="text-center text-4xl md:text-5xl font-bold text-primary-alt dark:text-slate-300">
                        {title}
                    </h2>
                    <p className="text-center text-base md:text-lg font-normal text-primary dark:text-slate-200 max-w-md mt-2 mx-auto">
                        {description}
                    </p>
                </motion.div>
               <div className="w-full h-72 md:h-[48rem] z-10">
                    {children}
                </div>
            </div>
    </Section>
));

GlobeSection.displayName = 'GlobeSection';


export {Section, HeroSection, GlobeSection};

