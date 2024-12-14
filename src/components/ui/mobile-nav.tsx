import {FaBars} from "react-icons/fa6";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import {orbitron} from "@/app/font";
import {ModeToggle} from "@/components/ui/mode-toggle";
import {useState} from "react";


export default function MobileNav({ navigation, pathname }: {navigation: {name: string, href: string}[], pathname: string}) {
    const [open, setOpen] = useState(false);
    const handleCloseDialog = () => setOpen(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="items-end justify-end" asChild>
                <Button variant="link">
                    <FaBars className="text-primary-alt dark:text-secondary"/>
                </Button>
            </DialogTrigger>
            <DialogContent className={cn("max-w-screen-lg h-full text-2xl md:text-5xl", orbitron.className)}>
                <DialogHeader>
                    <DialogTitle>
                        <Logo/>
                    </DialogTitle>
                </DialogHeader>
                <Separator />
                <div className="w-full h-full flex flex-col gap-y-4">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={handleCloseDialog}
                        className={`${item.href === pathname && "border p-2 border-primary-alt dark:border-secondary-alt rounded"} text-primary-alt dark:text-secondary uppercase font-semibold md:my-auto`}
                    >
                        {item.name}
                    </Link>
                ))}
                    <ModeToggle/>
                </div>
                <DialogFooter>
                    <Button variant="default" className="w-full font-bold uppercase md:text-5xl md:my-auto md:p-12">Download CV</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}