import { Button } from '@/components/ui/index'
import Image from 'next/image';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    rating: number;
    availability: string;
}

const ProductCard = ({ product }: { product: Product }) => {

    return (
        <div className='border border-black/20 w-full p-4 rounded-2xl overflow-hidden shadow-md'>
            <Image alt={product.title} src={product.thumbnail} width={500} height={500} className="w-full h-48 object-contain rounded-xl" />
            <span className='text-lg font-medium mb-3'>{product.title}</span>
            <div className='flex flex-row items-center gap-2 mb-1'>
                <p className='text-sm font-medium capitalize text-black/60'>{product.category}</p>
                <p className='text-sm font-medium text-black/60'>{product.rating} Star</p>
            </div>
            <p className='text-sm font-medium text-black/80 mb-1'>{product.availability}</p>
            <p className='text-base font-normal mb-4'>{product.price}</p>
            <div className='flex flex-row gap-2'>
                <Button variant='outline' className='flex-1 h-auto py-2.5 rounded-md'>View Details</Button>
                <Button className='flex-1 h-auto py-2.5 rounded-md'>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard