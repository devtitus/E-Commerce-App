import { NextResponse } from 'next/server';

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const apiBody = {
            username: body.email,
            password: body.password
        };

        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(apiBody),
            credentials: 'include'
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || 'Login failed' },
                { status: res.status }
            );
        }

        const response = NextResponse.json(data);

        const token = data.accessToken || data.token;

        if (token) {
            response.cookies.set('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/'
            });
        }

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
