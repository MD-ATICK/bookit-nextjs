import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {

    const bookingRoute = req.nextUrl.pathname.startsWith('/bookings')
    const isAuthenticated = cookies().get('appwrite-session')


    if (bookingRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}