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
    discount: number;
}

const limitWords = (title: string, maxWords: number): string => {
    const words = title.split(' ')
    if (words.length <= maxWords) return title
    return words.slice(0, maxWords).join(' ') + '...'
}

const ProductCard = ({ product }: { product: Product }) => {
    const maxTitleWords = 3;
    const displayTitle = limitWords(product.title, maxTitleWords);

    return (
        <div className='border border-black/10 bg-white w-full p-4 rounded-2xl overflow-hidden shadow-md'>
            <Image alt={product.title} src={product.thumbnail} width={500} height={500} className="w-full bg-[#F6F6F6] border border-black/10 h-48 object-contain rounded-xl mb-3" />
            <span className='text-lg font-medium mb-3'>{displayTitle}</span>
            <div className='flex flex-row items-center gap-2 mb-1'>
                <p className='text-sm font-medium capitalize text-black/60'>{product.category}</p>
                <p className='text-sm font-medium text-black/60'>{product.rating} Star</p>
            </div>
            <p className='text-sm font-medium text-black/80 mb-1'>{product.availability}</p>
            <div className='flex flex-row items-center gap-2 mb-4'>
                <p className='text-base font-normal'>${product.price}</p>
                <span>-</span>
                <p className='text-sm font-medium text-green-700'>{product.discount}%</p>
            </div>
            <div className='flex flex-row gap-2'>
                <Button variant='outline' className='flex-1 h-auto py-2.5 rounded-md'>View Details</Button>
                <Button className='flex-1 h-auto py-2.5 rounded-md'>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard