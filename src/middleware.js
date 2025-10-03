import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Define protected routes and their allowed roles
  const protectedRoutes = {
    '/doctor-portal': ['doctor'],
    '/health': ['patient'],
    '/health-tips': ['doctor', 'patient'],
    '/profile': ['doctor', 'patient'],
  };

  // Check if the current path is protected
  const protectedRoute = Object.keys(protectedRoutes).find(route => 
    pathname.startsWith(route)
  );

  if (protectedRoute) {
    // Get user role from cookies or headers (you might need to adjust this based on your auth implementation)
    const userRole = request.cookies.get('userRole')?.value;
    
    // If no role found, redirect to login
    if (!userRole) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check if user role is allowed for this route
    const allowedRoles = protectedRoutes[protectedRoute];
    if (!allowedRoles.includes(userRole)) {
      // Redirect to appropriate page based on role
      const redirectPath = userRole === 'doctor' ? '/doctor-portal' : '/health';
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/doctor-portal/:path*',
    '/health/:path*',
    '/health-tips/:path*',
    '/profile/:path*',
  ],
};
