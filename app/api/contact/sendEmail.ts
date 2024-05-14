import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

export async function sendEmail(text: any) {
    const info = await transporter.sendMail({
        from: 'Masjid contactForm',
        to: 'nasserqahtan0@gmail.com',
        subject: ' New message from masjid contactForm',
        text: text,
    })
}