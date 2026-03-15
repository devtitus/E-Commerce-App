'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Spinner } from '@/components/ui/index';

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const hangleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/products');
            } else {
                setErrors({ password: data.message || 'Login failed' });
            }
        } catch (error) {
            setErrors({ password: 'Network error. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex items-center justify-center w-full h-screen overflow-hidden'>
            <div className='flex flex-row w-full h-full bg-white border border-black'>
                <div className='w-[50%] h-screen py-20 px-28 bg-[#0F0F0F] border border-black flex flex-col items-center'>
                    {/* Content Wrapper */}
                    <div className='flex flex-col w-full justify-between max-w-md h-full'>
                        {/* Logo Container */}
                        <div className='flex items-start gap-3'>
                            <div className='w-12 h-12 rounded-md bg-white flex justify-center items-center text-2xl'>#</div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-white/80 font-bold uppercase'>E-Commerce Site</span>
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
                    <form className='flex flex-col w-full max-w-md' onSubmit={hangleSubmit}>
                        <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
                        <p className='text-base font-regular mt-2 mb-6'>Sign in to access your dashboard.</p>
                        {/* Email Wrapper */}
                        <div className='flex flex-col gap-2 mb-5'>
                            <label htmlFor="email_id" className='text-sm font-medium text-black/70'>Email</label>
                            <Input id='email_id' type='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter text" className='px-4 py-3' />
                            {errors.email && (
                                <p className="text-destructive text-sm">{errors.email}</p>
                            )}
                        </div>
                        {/* Password Wrapper */}
                        <div className='flex flex-col gap-2 mb-5'>
                            <label htmlFor="password" className='text-sm font-medium text-black/70'>Password</label>
                            <Input id='password' type='password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter password" className='px-4 py-3' />
                            {errors.password && (
                                <p className="text-destructive text-sm">{errors.password}</p>
                            )}
                        </div>
                        <Button variant="outline" type='submit' className='mt-4 h-auto py-3 text-base font-medium bg-[#0F0F0F] text-white hover:bg-[#0F0F0F]/10' disabled={isLoading}>
                            {isLoading ? <Spinner className="size-5 mr-2" /> : null}
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login