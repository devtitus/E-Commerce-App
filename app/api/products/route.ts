import { NextResponse } from 'next/server';

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;
const LIMIT = 10;

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');
        const sortBy = searchParams.get("sortBy");
        const order = searchParams.get("order");
        const page = Number(searchParams.get('page') || 1);
        const category = searchParams.get("category");

        const skip = (page - 1) * LIMIT;

        let url;

        if (query) {
            url = `${BASE_URL}/products/search?q=${query}&limit=${LIMIT}&skip=${skip}`;
        }
        else if (category) {
            url = `${BASE_URL}/products/category/${category}?limit=${LIMIT}&skip=${skip}`;
        }
        else {
            url = `${BASE_URL}/products/?limit=${LIMIT}&skip=${skip}`;
        }

        if (sortBy && order) {
            url += `&sortBy=${sortBy}&order=${order}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
            return NextResponse.json(
                { message: 'Failed to fetch products', products: [], total: 0 },
                { status: res.status }
            );
        }

        const data = await res.json();

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch products' },
            { status: 500 }
        )
    }
}