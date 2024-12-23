import { NextResponse, NextRequest } from "next/server";
import { sendEmailBook } from "@/app/utils/sendEmail";
import { addBooking } from './bookings';

export async function POST(req: NextRequest) {
    const data = await req.json();
    await sendEmailBook(data);

    try {
        
        const result = await addBooking(data);

        return NextResponse.json({
            message: 'Booking added successfully',
            result,
            succes: true
        });

    } catch (error) {
        return NextResponse.json({
            error: 'Failed to add booking'
        },
            { status: 500 });
    }


}

