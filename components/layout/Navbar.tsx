"use client";
import AvatarDropdown from "./AvatarDropdown"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    if (pathName === '/login') return null;

    return (
        <div className='w-full h-16 flex flex-row items-center border-b border-black/10'>
            <div className='w-full px-15 flex flex-row items-center justify-between'>
                {/* Logo Container */}
                <div className='flex items-start gap-3'>
                    <div className='w-10 h-10 rounded-md bg-[#0F0F0F] flex justify-center items-center text-xl text-white'>#</div>
                    <div className='flex flex-col gap-0.5'>
                        <span className='text-[#0F0F0F] text-sm font-bold uppercase'>E-Commerce Site</span>
                        <p className='text-[#0F0F0F]/60 text-xs'>Your Partner</p>
                    </div>
                </div>
                <AvatarDropdown />
            </div>
        </div>
    )
}

export default Navbar
