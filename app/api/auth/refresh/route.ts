import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get('token');

        if (!token || !token.value) {
            return NextResponse.json(
                { message: 'Unauthorized - No token provided' },
                { status: 401 }
            );
        }

        const res = await fetch('https://dummyjson.com/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refreshToken: token.value
            }),
            credentials: 'include'
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return NextResponse.json(
                { message: errorData.message || 'Failed to refresh token' },
                { status: res.status }
            );
        }

        const data = await res.json();

        if (!data.accessToken && !data.token) {
            return NextResponse.json(
                { message: 'Failed to refresh token - No token received' },
                { status: 500 }
            );
        }

        const response = NextResponse.json(data);

        const newToken = data.accessToken || data.token;
        response.cookies.set('token', newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/'
        });

        return response;

    } catch (error) {
        console.error('Refresh token error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
