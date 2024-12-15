"use client";

import Navbar from "@/components/ui/navbar";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const home = pathname === "/";

    return (
        <header className="inset-x-0 top-0 z-50">
            <Navbar pathname={pathname}/>

            {!home && (
                <BreadcrumbNav pathname={pathname}/>
            )}
        </header>
    );
}