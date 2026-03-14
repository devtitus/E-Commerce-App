import React from 'react'
import { Button, Input } from '@/components/ui/index'

const Login = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='flex flex-row w-full h-full bg-white border border-black'>
                <div className='w-[50%] h-screen py-20 px-28 bg-[#28211F] border border-black flex flex-col items-center'>
                    {/* Content Wrapper */}
                    <div className='flex flex-col w-full justify-between max-w-md h-full'>
                        {/* Logo Container */}
                        <div className='flex items-start gap-3'>
                            <div className='w-12 h-12 rounded-md bg-white flex justify-center items-center text-2xl'>#</div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-white/80 font-bold uppercase'>Eccomerce Site</span>
                                <p className='text-white/50 text-sm'>Your Partner</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-white text-3xl leading-normal font-semibold'>Elevate Your Everyday with Premium Essentials.</h2>
                            <p className='text-white/50 mt-4 leading-normal'>The quality of the products is unmatched, the checkout is seamless, and delivery is incredibly fast. It's my go-to store!</p>
                        </div>
                        {/* Empty Container */}
                        <div className='flex flex-col gap-2'>
                            <span className='text-md text-white'>AS FEATURED IN</span>
                            <p className='text-white/60 text-xs'>TRUSTED BY 50,000+ SHOPPERS</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] h-screen py-20 px-28 text-black flex flex-col items-center justify-center'>
                    {/* Login Form Wrapper */}
                    <div className='flex flex-col w-full max-w-md'>
                        <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
                        <p className='text-base font-regular mt-2 mb-6'>Sign in to access your dashboard.</p>
                        {/* Email Wrapper */}
                        <div className='flex flex-col gap-2 mb-5'>
                            <label htmlFor="email_id" className='text-sm font-medium text-black/70'>Email</label>
                            <Input id='email_id' placeholder="Enter text" className='px-4 py-3' />
                        </div>
                        {/* Password Wrapper */}
                        <div className='flex flex-col gap-2 mb-5'>
                            <label htmlFor="password" className='text-sm font-medium text-black/70'>Password</label>
                            <Input id='password' placeholder="Enter password" className='px-4 py-3' />
                        </div>
                        <Button variant="outline" className='mt-4 h-auto py-3 text-base font-medium'>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login