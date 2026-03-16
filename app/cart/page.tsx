"use client";
import { Button } from '@/components/ui/index'
import { CartCard } from '@/app/components/index';
import { useSelector } from "react-redux";
import { RootState } from '@/store/index';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Cart = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    const totalItems = items.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    ).toFixed(2);

    return (
        <div className='w-full h-[calc(100vh-64px)] flex flex-col overflow-hidden'>
            <div className='flex-shrink-0 px-4 md:px-8 lg:px-15 py-6 md:py-8 pb-4'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
                    <div className='w-full lg:w-3/4 bg-[#F6F6F6] border border-black/10 shadow-sm px-4 md:px-6 lg:px-8 py-4 md:py-6 rounded-xl'>
                        <div className='flex flex-row items-center mb-4 gap-3'>
                            <Link href='/products' className='cursor-pointer'>
                                <Button variant="outline">
                                    <ArrowLeft />
                                </Button>
                            </Link>
                            <h3 className='text-lg md:text-xl font-semibold text-black/80'>Shopping Cart</h3>
                        </div>
                        <hr className='border border-black/10 mb-4' />
                        <div className="flex flex-col gap-4 h-[calc(90vh-220px)] overflow-y-auto">
                            {items.length === 0 ? (
                                <div className='flex flex-col items-center justify-center gap-1 h-full'>
                                    <p className='text-black/90 text-lg font-medium'>Your cart is empty</p>
                                    <p className="text-black/60">Add items from the products page</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <CartCard key={item.id} item={item} />
                                ))
                            )}
                        </div>
                    </div>
                    <div className='w-full lg:flex-1 h-fit bg-[#F6F6F6] border border-black/10 shadow-sm px-4 md:px-6 lg:px-8 py-4 md:py-6 rounded-xl'>
                        <h4 className='text-lg font-semibold text-black/80 mb-2'>Checkout</h4>
                        <p className='text-base text-black/60 mb-4 md:mb-6'>Number of Items :{" "}
                            <span className='bg-white text-black/80 py-1.5 px-3 rounded-sm border border-black/20 leading-normal'>{totalItems}</span>
                        </p>
                        <p className='text-lg font-light text-black/90 mb-4 md:mb-5'>Grand Total : {" "}
                            <span className='text-black/80 font-semibold text-xl md:text-2xl'>${totalPrice}</span>
                        </p>
                        <Button className='w-full h-auto py-2.5 cursor-pointer'>Proceed to Buy</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
