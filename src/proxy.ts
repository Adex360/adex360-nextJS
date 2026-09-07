import withAuth from "next-auth/middleware";
import type { NextRequest } from "next/server";

const authProxy = withAuth as unknown as (request: NextRequest) => unknown;

export function proxy(request: NextRequest) {
  return authProxy(request);
}

export const config = {
  matcher: ["/admin/((?!login).*)"],
};
