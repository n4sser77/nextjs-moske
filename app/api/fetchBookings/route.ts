import { NextApiRequest, NextApiResponse } from 'next';
import { getBookingFromDb } from '@/app/utils/readBookingsFromDb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const bookings = await getBookingFromDb();
      return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
      return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
  }
}
