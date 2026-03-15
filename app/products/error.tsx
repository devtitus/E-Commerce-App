'use client';

import { Button } from '@/components/ui';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className='w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4 px-4'>
            <div className='flex flex-col items-center gap-2 text-center'>
                <AlertCircle className='size-12 text-destructive' />
                <h2 className='text-2xl font-semibold text-black'>Something went wrong!</h2>
                <p className='text-black/60 max-w-md'>
                    {error.message || 'An unexpected error occurred. Please try again.'}
                </p>
            </div>
            <div className='flex gap-3 mt-2'>
                <Button
                    variant='outline'
                    onClick={() => reset()}
                    className='cursor-pointer'
                >
                    Try again
                </Button>
                <Link href='/products'>
                    <Button variant='default' className='cursor-pointer'>
                        Back to Products
                    </Button>
                </Link>
            </div>
        </div>
    );
}
