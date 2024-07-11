 // app/_middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authenticate } from '@/app/utils/auth';  // Adjust the path as needed

export default function middleware(req: NextRequest) {
  console.log('Middlewere activated');
 /*  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token');

  // Check if the request is for the /admin route
  if (pathname.startsWith('/admin')) {
    // const token = req.cookies.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      authenticate(token);
    } catch (error) {
      return NextResponse.next();
    }
  }
    */

  // return NextResponse.next();
} 

 export const config = {
  matcher: ['/admin/:path*'],
};
