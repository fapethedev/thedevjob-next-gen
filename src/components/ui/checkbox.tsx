"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import {Check} from "lucide-react";


import {cn} from "@/lib/utils";


const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, ...props}, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "h-4 w-4 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-slate-200 hover:data-[state=checked]:bg-primary-alt hover:data-[state=checked]:shadow dark:bg-slate-950/80 dark:border-secondary dark:focus-visible:ring-secondary-alt dark:data-[state=checked]:bg-secondary dark:data-[state=checked]:text-primary dark:hover:data-[state=checked]:bg-secondary-alt dark:hover:data-[state=checked]:border-secondary-alt dark:hover:data-[state=checked]:text-slate-400",
            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
        >
            <Check className="h-4 w-4"/>
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export {Checkbox};
