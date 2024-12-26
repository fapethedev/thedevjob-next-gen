import {ModeToggle} from "@/components/ui/mode-toggle";
import MobileNav from "@/components/ui/mobile-nav";
import Logo from "@/components/ui/logo";
import {cn} from "@/lib/utils";
import {orbitron} from "@/app/font";
import Link from "next/link";
import {Button} from "@/components/ui/button";


const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Services', href: '/services'},
    {name: 'Projects', href: '/projects'},
    {name: 'Contact', href: '/contact'},
]


export default function Navbar({pathname}: {pathname: string}) {

    return (
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Logo className="-m-1.5 p-1.5"/>
            </div>
            <div className="flex lg:hidden">
                <MobileNav navigation={navigation} pathname={pathname}/>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 items-center justify-center">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn("text-base font-semibold p-1 text-primary-alt dark:text-secondary uppercase hover:border-b-2 hover:border-b-primary-alt hover:dark:border-b-secondary-alt",
                            orbitron.className,
                            item.href === pathname && "border-b-2 border-b-primary-alt dark:border-b-secondary-alt"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-8">
                <Link href="#" download target="_blank">
                    <Button variant="default" className={cn("font-semibold uppercase", orbitron.className)}>
                        Download CV
                    </Button>
                </Link>
                <ModeToggle/>
            </div>
        </nav>
    );
}