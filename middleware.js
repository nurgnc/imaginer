import { NextResponse } from "next/server";

import { applyRateLimiting } from "./utils/rate-limiting";

export async function middleware(request) {
    const response = NextResponse.next();
    try {
        await applyRateLimiting(request, response)
    } catch (error) {
        return new NextResponse("Too many request", { status: 429 })
    }
}

export const config = {
    matcher: "/api/(.*)"
}