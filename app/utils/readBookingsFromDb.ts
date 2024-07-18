"use server"

import dbConnect from "../api/dbConnect";

export async function readBookingsFromDb() {
    const db = await dbConnect();
    const collection = db.collection("bookings");
    return await collection.find().toArray();
  }

  export const getBookingFromDb = async () => {
    "use server"
  
    const bookingsFromDdb = await readBookingsFromDb()
    return  bookingsFromDdb
  }