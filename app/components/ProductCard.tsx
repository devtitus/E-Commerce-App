import { Button } from '@/components/ui/index'
import Image from 'next/image'

const ProductCard = () => {
    return (
        <div className='border border-black/20 w-full p-4 rounded-2xl overflow-hidden shadow-md'>
            <Image className='w-full rounded-xl mb-3' src="" width={30} height={22} alt='' />
            <span className='text-lg font-medium mb-3'>Nike Shoes</span>
            <p className='text-sm font-normal mb-2 text-black/70'>Description</p>
            <p className='text-base font-normal mb-4'>$23</p>
            <div className='flex flex-row gap-2'>
                <Button variant='outline' className='flex-1 h-auto py-2.5 rounded-md'>View Details</Button>
                <Button className='flex-1 h-auto py-2.5 rounded-md'>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard