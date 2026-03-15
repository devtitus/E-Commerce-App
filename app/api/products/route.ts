import { NextResponse } from 'next/server';

const BASE_URL = "https://dummyjson.com/products";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');

        const url = query ? `${BASE_URL}/search?q=${query}` : `${BASE_URL}`;

        const res = await fetch(url);

        const data = await res.json();

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch products' },
            { status: 500 }
        )
    }
}