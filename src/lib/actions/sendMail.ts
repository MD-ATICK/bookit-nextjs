"use server";

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        throw new Error("All fields are required");
    }

    try {
        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You can use Gmail, Outlook, or any other provider
            auth: {
                user: process.env.EMAIL_USERNAME, // Your email address
                pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
            },
        });

        // Define email options
        const mailOptions = {
            from: email,
            to: process.env.YOUR_EMAIL, // Your email where you will receive messages
            subject: `New Contact Form Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to send the email' };
    }
}
