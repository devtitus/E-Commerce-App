"use client";
import AvatarDropdown from "./AvatarDropdown"
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/index";
import Link from "next/link";

const Navbar = () => {
    const pathName = usePathname();
    if (pathName === '/login') return null;

    return (
        <div className='w-full h-16 flex flex-row items-center border-b border-black/10 bg-white'>
            <div className='w-full px-4 md:px-8 lg:px-15 flex flex-row items-center justify-between'>
                {/* Logo Container */}
                <Link href={'/'}>
                    <div className='flex items-start gap-3'>
                        <div className='w-10 h-10 rounded-md bg-[#0F0F0F] flex justify-center items-center text-xl text-white'>#</div>
                        <div className='hidden sm:flex flex-col gap-0.5'>
                            <span className='text-[#0F0F0F] text-sm font-bold uppercase'>E-Commerce Site</span>
                            <p className='text-[#0F0F0F]/60 text-xs'>Your Partner</p>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-5">
                    <Link href="/cart">
                        <Button variant="outline">
                            <ShoppingCart />
                        </Button>
                    </Link>
                    <AvatarDropdown />
                </div>

                <div className='flex items-center gap-4 md:hidden'>
                    <Link href="/cart">
                        <Button variant="outline" size="icon">
                            <ShoppingCart />
                        </Button>
                    </Link>
                    <AvatarDropdown />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
