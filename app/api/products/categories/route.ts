import { NextResponse } from 'next/server';

const BASE_URL = "https://dummyjson.com/products";

export async function GET() {
    try {
        const res = await fetch(`${BASE_URL}/categories`);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to fetch categories'},
            { status: 500}
        )
    }
}