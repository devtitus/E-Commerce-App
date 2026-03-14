import React from 'react'
import { Button } from '@/components/ui/index'

const Login = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='flex flex-row w-full h-full bg-white max-w-[1440px] border border-black'>
                <div className='w-[50%] h-screen py-20 px-28 border border-black'>
                    {/* Logo Container */}
                    <div className='flex items-center gap-3'>
                        <div className='w-8 h-8 rounded bg-[#073D44]'></div>
                        <span className='text-black/90 font-semibold capitalize'>Eccomerce Site</span>
                    </div>
                    <Button variant="outline">Button</Button>
                </div>
                <div className='w-[50%] h-screen py-20 px-28 text-black'>Content</div>
            </div>
        </div>
    )
}

export default Login