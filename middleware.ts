import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside

export default withAuth(
    async function middleware(req) {
        const token = await getToken({ req });
        const isAuth = !!token;
        const isAuthPage =
            req.nextUrl.pathname.startsWith("/login") ||
            req.nextUrl.pathname.startsWith("/register");

        if (isAuthPage) {
            if (!isAuth) return null;
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        if (!isAuth) {
            return NextResponse.redirect(new URL("login", req.url));
        }

        console.log("token", token);
    },
    {
        callbacks: {
            async authorized({ req, token }) {
                // if (token.role === "admin")
                return true;
            },
        },
    }
);

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/dashboard/:path*", "/editor/:path", "/login", "/register"],
};
