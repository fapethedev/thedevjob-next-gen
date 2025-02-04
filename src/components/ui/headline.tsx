'use client';

import React from "react";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";

interface HeadlineProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

const Headline = React.forwardRef<
    HTMLElement,
    HeadlineProps
>(({className, children, title, ...props}, ref) => (
    <article
        ref={ref}
        className={cn("", className)}
        {...props}
    >
        <motion.div
            initial={{opacity: 0.5, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="flex flex-col mb-24 gap-y-12 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center h-full"
        >
            <h1 className="text-5xl text-transparent font-bold uppercase tracking-tight md:text-7xl">
                {title}
            </h1>
        </motion.div>


        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
                delay: 1,
                duration: 1.5,
                ease: "easeInOut",
            }}
            className="flex items-center justify-center -my-4 gap-x-8 text-4xl text-slate-400 font-medium dark:text-secondary"
        >
            {children}
        </motion.div>

    </article>
));

Headline.displayName = 'Headline';

export {Headline};

