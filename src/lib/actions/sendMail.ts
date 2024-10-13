"use server";

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return {error : 'All fields are required'}
    }

    console.log(name, email, message, process.env.NEXT_EMAIL_USERNAME,  process.env.NEXT_EMAIL_PASSWORD ,process.env.NEXT_MY_EMAIL)
    try {
        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You can use Gmail, Outlook, or any other provider
            auth: {
                user: process.env.NEXT_EMAIL_USERNAME, // Your email address
                pass: process.env.NEXT_EMAIL_PASSWORD, // Your email password or app-specific password
            },
        });

        // Define email options
        const mailOptions = {
            from: email,
            to: process.env.NEXT_MY_EMAIL, // Your email where you will receive messages
            subject: `New Contact Form Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p> 
                   <p><strong>Email:</strong> ${email}</p> <br />
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to send the email' };
    }
}
