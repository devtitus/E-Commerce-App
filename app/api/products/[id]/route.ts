import { NextResponse } from "next/server";

const BASE_URL='https://dummyjson.com/products'

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {

        const res = await fetch(
            `${BASE_URL}/${params.id}`
        );

        const data = await res.json();

        return NextResponse.json(data);

    } catch (error) {

        return NextResponse.json(
            { message: "Failed to fetch product" },
            { status: 500 }
        );

    }
}