import type {Metadata} from "next";
import React from "react";
import {Toaster} from "react-hot-toast";

import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import {cn} from "@/lib/utils";
import {exo2} from "@/app/font";

export const metadata: Metadata = {
    title: {
        template: 'TheDevJob | %s',
        default: 'TheDevJob',
    },
    description: "Fapethedev Next Gen Portfolio, now meet with the most promising dev, ing and intelligent systems and agents master",
    applicationName: 'TheDevJob',
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`bg-slate-50 dark:bg-slate-950/80 antialiased h-full w-full`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <Header/>
                    <div className={cn("px-6 py-4", exo2.className)}>
                        {children}
                    </div>
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    );
}
