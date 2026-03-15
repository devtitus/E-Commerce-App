import { Button } from '@/components/ui/index'
import { CartCard } from '@/app/components/index';

const Cart = () => {
    return (
        <div className='w-full h-[calc(100vh-64px)] flex flex-col'>
            <div className='flex-shrink-0 px-15 py-8 pb-4'>
                <div className='flex flex-row gap-6'>
                    <div className='w-3/4 bg-[#F6F6F6] border border-black/10 shadow-sm px-8 py-6 rounded-xl'>
                        <h3 className='text-2xl font-semibold text-black/80 mb-4'>Shopping Cart</h3>
                        <hr className='border border-black/10 mb-4'/>
                        <CartCard />
                    </div>
                    <div className='flex-1 bg-[#F6F6F6] border border-black/10 shadow-sm px-8 py-6 rounded-xl'>
                        <h4 className='text-xl font-semibold text-black/80 mb-2'>Checkout</h4>
                        <p className='text-base text-black/60 mb-6'>Number of Items :{" "}
                            <span className='bg-white text-black/80 py-1.5 px-3 rounded-sm border border-black/20 leading-normal'>5</span>
                        </p>
                        <p className='text-lg font-light text-black/90 mb-5'>Grand Total : {" "}
                        <span className='text-black/80 font-semibold text-2xl'>$1000</span>
                        </p>
                        <Button className='w-full h-auto py-2.5'>Proceed to Buy</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart