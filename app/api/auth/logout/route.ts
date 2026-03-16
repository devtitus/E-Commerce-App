import { NextRequest, NextResponse } from "next/server";

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get('token');

        try {
            if (token?.value) {
                await fetch(`${BASE_URL}/auth/logout`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token.value}`
                    },
                    credentials: 'include'
                });
            }
        } catch {}

        const response = NextResponse.json({ message: 'Logged out successfully' });

        // Clear token cookie
        response.cookies.set('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            expires: new Date(0)
        });

        // Clear refreshToken cookie
        response.cookies.set('refreshToken', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            expires: new Date(0)
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { message: 'Logout failed' },
            { status: 500 }
        );
    }
}
