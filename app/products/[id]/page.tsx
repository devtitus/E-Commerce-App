import { Button } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const ProductById = () => {
    return (
        <div className='w-full h-[calc(100vh-64px)] flex flex-col'>
            <div className='flex-shrink-0 px-15 py-8 pb-4'>

                <div className='w-full mb-6'>
                    <Link href='/products'>
                        <Button variant={'outline'} className={`flex flex-row items-center gap-2`}>
                            <ArrowLeft />
                            Back
                        </Button>
                    </Link>
                </div>

                <div className='flex flex-row gap-10'>
                    <Image src={''} width={500} height={500} alt='' className='w-125 h-125 object-contain rouded' />
                    <div>
                        <div className='flex flex-row w-full justify-between items-start mb-3'>
                            <div className='w-[80%]'>
                                <h1 className='text-2xl font-semibold mb-2 text-black'>Essence Mascara Lash Princes</h1>
                                <p className='text-base font-normal text-black/80 leading-relaxed'>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
                            </div>
                            <span className='flex-nowrap text-lg text-orange-600 font-bold'>2.56 Stars</span>
                        </div>
                        <div className='flex flex-row items-center gap-3 mb-2'>
                            <p className='text-green-700 text-base font-medium'>InStock</p>
                            <div>-</div>
                            <p className='bg-[#F6F6F6] border border-black/20 text-black/80 font-medium rounded-full w-fit px-3 py-0.5 text-sm capitalize'>beauty</p>
                        </div>
                        <p className='text-base font-medium text-black'>Stock:{" "}<span className='text-black/80 font-normal'>24</span></p>
                        <hr className='border border-black/10 my-5' />
                        <div className='flex flex-row items-center gap-2 mb-5'>
                            <p className='text-2xl font-medium flex flex-row items-start text-black gap-1'>
                                <span className='text-base font-normal text-black/80'>$</span>
                                1000
                            </p>
                            <div className='text-black/40'>|</div>
                            <p className='text-lg font-light text-green-700'>10.48% Off</p>
                        </div>
                        <div className='flex flex-row items-center gap-3 mb-12'>
                            <Button variant={'outline'} className='py-2.5 h-auto px-6'>Buy Now</Button>
                            <Button variant={'default'} className='py-2.5 h-auto px-6'>Add to Cart</Button>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            {/* Warranty */}
                            <div className='w-1/3 border border-black/20 px-5 py-4 rounded-lg flex flex-col shadow-sm bg-white'>
                                <span className='text-md font-medium mb-1'>Warranty Information</span>
                                <p className='text-base font-normal text-black/80'>1 week warranty</p>
                            </div>
                            {/* Shipping Information */}
                            <div className='w-1/3 border border-black/20 px-5 py-4 rounded-lg flex flex-col shadow-sm bg-white'>
                                <span className='text-md font-medium mb-1'>Shipping Information</span>
                                <p className='text-base font-normal text-black/80'>Ships in 3-5 business days</p>
                            </div>
                            {/* Return Policy */}
                            <div className='w-1/3 border border-black/20 px-5 py-4 rounded-lg flex flex-col shadow-sm bg-white'>
                                <span className='text-md font-medium mb-1'>Return Policy</span>
                                <p className='text-base font-normal text-black/80'>No return policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductById