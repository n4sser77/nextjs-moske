import { NextResponse, NextRequest } from "next/server";
import { login, authenticate } from '@/app/utils/auth';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log(data ? `Data received: ${data}` : `Data not received`);

        const { username, password } = data;
        console.log(username);

        try {
            const token = await login(username, password);
            console.log(token ? `User logged in successfully, token created: ${token}` : `Login failed`);

            let response = NextResponse.json({ message: 'User logged in successfully' }, { status: 201 });

            response.cookies.set('token', token, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });

            return response;

        } catch (error: any) {
            console.error(error.message);
            return NextResponse.json({ message: 'Authentication failed' }, { status: 401 });
        }

    } catch (error: any) {
        console.error('Failed to parse request body:', error.message);
        return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }
}
