import { NextResponse, NextRequest } from 'next/server';

const protectedRoutes = ['/products', '/cart'];
const authRoutes = ['/login'];

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');
    const { pathname } = req.nextUrl;
    
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
    
    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    if (token && isAuthRoute) {
        return NextResponse.redirect(new URL('/products', req.url));
    }

    return NextResponse.next();
}
