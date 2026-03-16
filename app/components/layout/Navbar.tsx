"use client";
import AvatarDropdown from "./AvatarDropdown"
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/index";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    if (pathName === '/login') return null;

    return (
        <div className='w-full h-16 flex flex-row items-center border-b border-black/10 bg-white'>
            <div className='w-full px-4 md:px-8 lg:px-15 flex flex-row items-center justify-between'>
                {/* Logo Container */}
                <div className='flex items-start gap-3'>
                    <div className='w-10 h-10 rounded-md bg-[#0F0F0F] flex justify-center items-center text-xl text-white'>#</div>
                    <div className='hidden sm:flex flex-col gap-0.5'>
                        <span className='text-[#0F0F0F] text-sm font-bold uppercase'>E-Commerce Site</span>
                        <p className='text-[#0F0F0F]/60 text-xs'>Your Partner</p>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-5">
                    <Link href="/cart">
                        <Button variant="outline">
                            <ShoppingCart />
                        </Button>
                    </Link>
                    <AvatarDropdown />
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='absolute top-16 left-0 right-0 bg-white border-b border-black/10 p-4 flex flex-col gap-4 md:hidden z-50'>
                        <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="outline" className='w-full'>
                                <ShoppingCart className='mr-2' />
                                Cart
                            </Button>
                        </Link>
                        <AvatarDropdown />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
