import { NextResponse } from 'next/server';

const BASE_URL='https://dummyjson.com'

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const res = await fetch(`${BASE_URL}}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: res.status }
            );
        }

        const data = await res.json();

        const response = NextResponse.json(data);

        response.cookies.set('token', data.token, {
            httpOnly: true,
            secure: true,
            path: '/'
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}