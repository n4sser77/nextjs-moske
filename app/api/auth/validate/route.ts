// app/api/auth/validate/route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { authenticate } from "@/app/utils/auth"; // Ensure this path is correct
import { NextResponse } from "next/server";
import { Z_UNKNOWN } from "zlib";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {

    const cookieHeader = req.headers.get("cookie") as any;
    if (!cookieHeader) {
      return new NextResponse(JSON.stringify({ error: "No token provided" }), {
        status: 401,
      });
    }

    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c: any) => c.split("="))
    );
    const token = cookies.token;
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "No token provided" }), {
        status: 401,
      });
    }

    const user = authenticate(token); // This should validate the token and return the user
    if (!user) {
      return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
      });
    }

    return new NextResponse(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
