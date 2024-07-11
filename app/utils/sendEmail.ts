import nodemailer from 'nodemailer';
import { months } from '@/app/utils/months';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendEmail(data: any) {

    try{
        const info = await transporter.sendMail({
            from: 'Masjid contactForm <nasserqahtan0@gmail.com>',
            to: 'nasserqahtan0@gmail.com',
            subject: 'New message from masjid contactForm',
            html: `<h1> ${data.name[0].toUpperCase() + data.name.slice(1)} </h1>
                    Email: ${data.email} <br/><br/><hr/>
                    <h2>Message: </h2> 
                     ${data.message}`,
            //text: text, // Pass the formatted string here,
            
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
   
}

export async function sendEmailBook(data: any) {
  
    try{
        const info = await transporter.sendMail({
            from: 'Masjid contactForm <nasserqahtan0@gmail.com>',
            to: 'nasserqahtan0@gmail.com',
            subject: 'New message from masjid contactForm',
            html: `<h1> ${data.name[0].toUpperCase() + data.name.slice(1)} </h1>
                    Email: ${data.email} 
                    Phone Number: ${data.phoneNumber} 
                    <br/><br/><hr/>
                    <h2>Booked on: </h2> 
                     <h3>${data.selectedSlot} - ${months[data.selectedDate.currentMonth]} ${data.selectedDate.selectedDay} ${data.selectedDate.currentYear}<h3/>`,
            //text: text, // Pass the formatted string here,
            
        });

        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
   
}