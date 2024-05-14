import {NextResponse} from "next/server";
import { sendEmail } from "./sendEmail";
const fs = require('fs');
const path = require('path');


export async function POST(request: any){

    const data = await request.json();


    //read db -json file
        const filePath = path.resolve(process.cwd(),'app/data/subbmision.json');

        let submissions: any = [];

        try {
            const data = fs.readFileSync(filePath, 'utf8');
            submissions = JSON.parse(data);

        } catch (error) {
            console.error("Error reading this file", error);

        }
        
        
        console.log(data, "data >>>");
        await sendEmail(data);
    // parse the json + add the new data + write in json file again
        submissions.push(data);

        try {
            const newData = JSON.stringify(submissions, null, 2);
            fs.writeFileSync(filePath, newData, 'utf8');

            
            
        } catch (error) {
            console.error('Error writing this file', error);
        }

        return NextResponse.json({
            data: data,
            message: 'This message has been  successfully sent',
            succes: true

})
}

 