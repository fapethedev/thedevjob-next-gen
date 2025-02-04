'use client';

import React from "react";
import {cn} from "@/lib/utils";


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

export {Section};

