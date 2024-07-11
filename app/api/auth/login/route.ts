import { NextResponse, NextRequest } from "next/server";
import { login, authenticate } from '@/app/utils/auth'
import { redirect } from "next/dist/server/api-utils";


export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    console.log(data ? `Data recived:  ${data}` : `Data not recived`);

    const { username, password } = data;
    console.log(username)
    try {
        const token = login(username, password)
        console.log(token ? `User logged in successfully, token created: ${token}` : `Login failed`);
        /*  try {
             const user = authenticate(token);
             console.log('User authenticated: ', user.username)
         } catch (error: any) {
             console.error(error.message)
         } */
        let response = new NextResponse( 'User logged in sucessfully', {status: 201});

        response.cookies.set('token', token, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 });

        return response;

    } catch (error: any) {
        console.error(error.message);
        return new NextResponse('Authentication failed', {status: 401});

    }





}

