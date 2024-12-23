import { NextResponse, NextRequest } from "next/server";
import { register } from '@/app/utils/auth';

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    console.log(data ? `Data received: ${data}` : `Data not received`);

    const { username, password } = data;

    try {
        // Attempt to register a new user
        register(username, password);
        console.log('User registered successfully');

        // Return a successful response
        return new NextResponse('User registered successfully', { status: 200 });

    } catch (error: any) {
        // Handle specific error for user already exists
        if (error.message === 'User already exists') {
            console.error(error.message);
            return new NextResponse('User already exists', { status: 409 });
        }

        // Handle general registration errors
        console.error('Registration failed:', error.message);
        return new NextResponse('Registration failed', { status: 500 });
    }
}
