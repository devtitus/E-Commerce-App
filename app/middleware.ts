import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');

    if(!token && req.nextUrl.pathname.startsWith('/products')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    if(token && req.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/products', req.url));
    }

    return NextResponse.next();
}