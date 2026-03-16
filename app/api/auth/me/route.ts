import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token');

        if (!token || !token.value) {
            return NextResponse.json(
                { message: 'Unauthorized - No token provided' },
                { status: 401 }
            );
        }

        const res = await fetch('https://dummyjson.com/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.value}`
            },
            credentials: 'include'
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return NextResponse.json(
                { message: errorData.message || 'Failed to fetch user' },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Get user error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
