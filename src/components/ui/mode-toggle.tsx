"use client";

import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const {setTheme} = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-50 dark:bg-slate-950/80" align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                   <Button className="gap-0 w-full" variant="outline">
                       Light
                   </Button>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Button className="gap-0 w-full" variant="outline">
                        Dark
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Button className="gap-0 w-full" variant="outline">
                        System
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
