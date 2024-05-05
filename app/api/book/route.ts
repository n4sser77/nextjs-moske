import {NextResponse} from "next/server";
const fs = require('fs');
const path = require('path');

export async function POST(request: any){
    const data = await request.json();

    //read db -json file
        const filePath = path.resolve(process.cwd(),'app/data/bookings.json');

        let bookings: any = [];

        try {
            const data = fs.readFileSync(filePath, 'utf8');
            bookings = JSON.parse(data);
        } catch (error) {
            console.error("Error reading this file", error);
        }
        
        console.log(data, "data >>>")
    // parse the json + add the new data + write in json file again
        bookings.push(data);

        try {
            const newData = JSON.stringify(bookings, null, 2);
            fs.writeFileSync(filePath, newData, 'utf8');
            
        } catch (error) {
            console.error('Error writing this file', error);
        }

        return NextResponse.json({
            data: data,
            message: 'Booked successfully sent to bookings.json',
            succes: true

})
}

 