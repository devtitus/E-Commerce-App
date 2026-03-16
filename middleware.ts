import { NextResponse, NextRequest } from 'next/server';

const protectedRoutes = ['/products', '/cart'];
const authRoutes = ['/login'];

function isTokenExpired(token: string): boolean {
    try {
        const payload = token.split('.')[1];
        if (!payload) return true;

        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
        const decoded = JSON.parse(atob(padded));

        if (!decoded?.exp) return false;
        return Date.now() >= decoded.exp * 1000;
    } catch {
        return true;
    }
}

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    const refreshToken = req.cookies.get('refreshToken')?.value;
    const { pathname } = req.nextUrl;
    
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
    
    const hasValidToken = Boolean(token) && !isTokenExpired(token as string);
    const hasRefreshToken = Boolean(refreshToken);
    const hasSession = hasValidToken || hasRefreshToken;

    if (!hasSession && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    if (hasValidToken && isAuthRoute) {
        return NextResponse.redirect(new URL('/products', req.url));
    }

    return NextResponse.next();
}
