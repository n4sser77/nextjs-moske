import dbConnect from '../dbConnect';

interface Booking {
  name: string;
  email: string;
  phoneNumber: string;
  selectedDate: object;
  selectedSlot: string;
  [key: string]: any;
}

export async function addBooking(booking: Booking) {
  const db = await dbConnect();
  const collection = db.collection('bookings');
  
  console.log(`Attempting to add booking: ${JSON.stringify(booking)}`);
  const result = await collection.insertOne(booking);
  console.log(`Booking added: ${JSON.stringify(result)}`);
  return result;
}
