import { NextResponse } from "next/server";

const BASE_URL='https://dummyjson.com/products'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const res = await fetch(`${BASE_URL}/${id}`);

        if (!res.ok) {
            return NextResponse.json(
                { message: 'Product not found' },
                { status: res.status }
            );
        }

        const data = await res.json();

        return NextResponse.json(data);

    } catch (error) {

        return NextResponse.json(
            { message: "Failed to fetch product" },
            { status: 500 }
        );

    }
}