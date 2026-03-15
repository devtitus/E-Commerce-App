import { NextResponse } from 'next/server';

const BASE_URL = "https://dummyjson.com/products";
const LIMIT = 10;

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('q');
        const sortBy = searchParams.get("sortBy");
        const order = searchParams.get("order");
        const page = Number(searchParams.get('Page') || 1);

        const skip = (page - 1) * LIMIT;

        let url;

        if (query) {
            url = `${BASE_URL}/search?q=${query}&limit=${LIMIT}&skip=${skip}`;
        } else {
            url = `${BASE_URL}?limit=${LIMIT}&skip=${skip}`;
        }

        if (sortBy && order) {
            url += `&sortBy=${sortBy}&order=${order}`;
        }

        const res = await fetch(url);

        const data = await res.json();

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch products' },
            { status: 500 }
        )
    }
}