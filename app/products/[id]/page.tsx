'use client';
import { useEffect, useState } from 'react';
import { Button, Spinner } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/index';
import { toast } from 'sonner';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    rating: number;
    availabilityStatus: string;
    discountPercentage: number;
    stock: number;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
};

const ProductById = ({ params }: { params: Promise<{ id: string }> }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setError(null);
                const { id } = await params;
                const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products/${id}`);
                
                if (!res.ok) {
                    setProduct(null);
                    setError('Product not found');
                    setLoading(false);
                    return;
                }
                
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError('Failed to load product. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [params]);

    const handleAddToCart = () => {
        if (!product) return;
        dispatch(
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                availability: product.availabilityStatus,
            })
        );
        toast.success(
            `${product.title} added to cart!`,
            {
                style: {
                    background: '#F0FFF5',
                    color: 'oklch(52.7% 0.154 150.069)',
                    border: '0.3px solid #5ECC7E',
                },
            }
        );
    };

    if (loading) {
        return (
            <div className='w-full h-[calc(100vh-64px)] flex items-center justify-center'>
                <Spinner className="size-8" />
            </div>
        );
    }

    if (error) {
        return (
            <div className='w-full h-[calc(100vh-64px)] flex items-center justify-center'>
                <div className='flex flex-col items-center gap-2'>
                    <p className='text-destructive text-lg font-medium'>{error}</p>
                    <Link href='/products'>
                        <Button variant='outline'>Back to Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className='w-full h-[calc(100vh-64px)] flex items-center justify-center'>
                <p>Product not found</p>
            </div>
        );
    }

    return (
        <div className='w-full h-[calc(100vh-64px)] flex flex-col overflow-hidden'>
            <div className='flex-shrink-0 px-15 py-8 pb-4'>

                <div className='w-full mb-6'>
                    <Link href='/products'>
                        <Button variant={'outline'} className={`flex flex-row items-center gap-2 cursor-pointer`}>
                            <ArrowLeft />
                            Back
                        </Button>
                    </Link>
                </div>

                <div className='flex flex-row gap-10'>
                    <Image src={product.thumbnail} width={500} height={500} alt={product.title} className='w-125 h-125 object-contain rounded-xl border border-black/10 bg-[#F6F6F6]' sizes="(max-width: 768px) 100vw, 320px" quality={85} />
                    <div>
                        <div className='flex flex-row w-full justify-between items-start mb-3'>
                            <div className='w-[80%]'>
                                <h1 className='text-2xl font-semibold mb-2 text-black'>{product.title}</h1>
                                <p className='text-base font-normal text-black/80 leading-relaxed'>{product.description}</p>
                            </div>
                            <span className='flex-nowrap text-lg text-orange-600 font-bold'>{product.rating} Stars</span>
                        </div>
                        <div className='flex flex-row items-center gap-3 mb-2'>
                            <p className='text-green-700 text-base font-medium'>{product.availabilityStatus}</p>
                            <div>-</div>
                            <p className='bg-[#F6F6F6] border border-black/20 text-black/80 font-medium rounded-full w-fit px-3 py-0.5 text-sm capitalize'>{product.category}</p>
                        </div>
                        <p className='text-base font-medium text-black'>Stock:{" "}<span className='text-black/80 font-normal'>{product.stock}</span></p>
                        <hr className='border border-black/10 my-5' />
                        <div className='flex flex-row items-center gap-2 mb-5'>
                            <p className='text-2xl font-medium flex flex-row items-start text-black gap-1'>
                                <span className='text-base font-normal text-black/80'>$</span>
                                {product.price}
                            </p>
                            <div className='text-black/40'>|</div>
                            <p className='text-lg font-light text-green-700'>{Math.round(product.discountPercentage)}% Off</p>
                        </div>
                        <div className='flex flex-row items-center gap-3 mb-12'>
                            <Button variant={'outline'} className='py-2.5 h-auto px-6 cursor-pointer'>Buy Now</Button>
                            <Button variant={'default'} className='py-2.5 h-auto px-6 cursor-pointer' onClick={handleAddToCart}>Add to Cart</Button>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            {/* Warranty */}
                            <div className='w-1/3 border border-black/20 px-5 py-4 rounded-lg flex flex-col shadow-sm bg-white'>
                                <span className='text-md font-medium mb-1'>Warranty Information</span>
                                <p className='text-base font-normal text-black/80'>{product.warrantyInformation}</p>
                            </div>
                            {/* Shipping Information */}
                            <div className='w-1/3 border border-black/20 px-5 py-4 rounded-lg flex flex-col shadow-sm bg-white'>
                                <span className='text-md font-medium mb-1'>Shipping Information</span>
                                <p className='text-base font-normal text-black/80'>{product.shippingInformation}</p>
                            </div>
                            {/* Return Policy */}
                            <div className='w-1/3 border border-black/20 px-5 py-4 rounded-lg flex flex-col shadow-sm bg-white'>
                                <span className='text-md font-medium mb-1'>Return Policy</span>
                                <p className='text-base font-normal text-black/80'>{product.returnPolicy}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductById