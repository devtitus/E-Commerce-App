"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/index';
import { Minus, Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '@/store/index';

type CartItem = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    availability: string;
    quantity: number;
};

const CartItemCard = ({ item }: { item: CartItem }) => {
    const dispatch = useDispatch();

    return (
        <div className='bg-white shadow-xs rounded-lg border border-black/10 p-5 h-fit md:h-47.5'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-3 h-full'>
                <Image width={150} height={150} src={item.thumbnail} alt={item.title} className='rounded-lg object-contain w-37.5 h-37.5' />
                <div className='flex flex-col justify-between w-full h-full'>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-row justify-between mb-1 w-full'>
                            <span className='text-lg md:text-xl text-black/90 font-medium'>{item.title}</span>
                            <span className='text-lg md:text-xl text-black/90 font-bold'>${item.price * item.quantity}</span>
                        </div>
                        <span className='text-sm text-green-700 mb-1'>{item.availability}</span>
                        <span className='text-sm text-black/80 mb-3'>FREE Delivery - In 5 working days</span>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <div className='flex flex-row gap-4 items-center'>
                            <Button variant='outline' onClick={() => dispatch(decreaseQty(item.id))}><Minus /></Button>
                            <span>{item.quantity}</span>
                            <Button variant='outline' onClick={() => dispatch(increaseQty(item.id))}><Plus /></Button>
                        </div>
                        <div className='text-black/40'>|</div>
                        <Button variant='outline' onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard