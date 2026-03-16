import { NextResponse } from 'next/server';

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;

export async function GET() {
    try {
        const res = await fetch(`${BASE_URL}/products/categories`);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to fetch categories'},
            { status: 500}
        )
    }
}