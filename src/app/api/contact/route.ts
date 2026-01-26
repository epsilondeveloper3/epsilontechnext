import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, mobile, city, specialty, clinic } = body;

        // Basic validation
        if (!name || !mobile) {
            return NextResponse.json(
                { status: 'error', message: 'Name and Mobile number are required' },
                { status: 400 }
            );
        }

        // Configure Transporter (Use Environment Variables in Vercel)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or use 'host', 'port' etc. for other providers
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // App Password (not login password)
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'jaydeep@epsilon-technology.com', // Receiver address
            subject: `New Lead: ${name} - Doctor Growth Consultation`,
            html: `
                <h2>New Booking Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Specialty:</strong> ${specialty}</p>
                <p><strong>Clinic:</strong> ${clinic}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { status: 'success', message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
