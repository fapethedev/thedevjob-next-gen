import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-slate-300",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-secondary shadow hover:bg-primary-alt dark:bg-secondary dark:text-primary dark:hover:bg-secondary-alt dark:hover:text-slate-300",
                destructive:
                    "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
                outline:
                    "border border-primary bg-slate-50 shadow-sm text-primary hover:bg-primary hover:text-slate-50 dark:border-secondary dark:bg-slate-950/80 dark:text-secondary dark:hover:border-secondary-alt dark:hover:text-slate-300",
                secondary:
                    "bg-slate-200 text-primary shadow-sm hover:bg-slate-200/80 hover:text-primary-alt dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 dark:hover:text-slate-100",
                ghost:
                    "text-primary-alt dark:text-secondary hover:bg-primary-alt hover:text-slate-50 dark:hover:bg-secondary dark:hover:text-primary-alt",
                link:
                    "text-primary-alt underline-offset-4 hover:underline dark:text-secondary",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button";

export {Button, buttonVariants}
