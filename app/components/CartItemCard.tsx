import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/index';
import { Minus, Plus } from 'lucide-react';

const CartItemCard = () => {
    return (
        <div className='bg-white shadow-xs rounded-lg border border-black/10 p-5 h-47.5'>
            <div className='flex flex-row items-start gap-3 h-full'>
                <Image width={150} height={150} src='' alt='' className='rounded-lg object-contain w-37.5 h-37.5' />
                <div className='flex flex-col justify-between w-full h-full'>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-row justify-between mb-1 w-full'>
                            <span className='text-xl text-black/90 font-medium'>ScotchBrite Scrub Pad ( pack of 5)</span>
                            <span className='text-xl text-black/90 font-bold'>$500</span>
                        </div>
                        <span className='text-sm text-green-700 mb-1'>InStock</span>
                        <span className='text-sm text-black/80'>FREE Delivery - In 5 working days</span>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='flex flex-row gap-4 items-center'>
                            <Button variant='outline'><Minus /></Button>
                            <span>2</span>
                            <Button variant='outline'><Plus /></Button>
                        </div>
                        <div className='text-black/40'>|</div>
                        <Button variant='outline'>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard