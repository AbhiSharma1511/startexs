import nodemailer from "nodemailer";

export async function POST(request) {
    const { clientName, organizationName, email, phNumber, projectBrief } = await request.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            to: email,
            subject: "Thank You for Submitting Your Project Details",
            text: `Hi ${clientName},\n\n
                Thank you for reaching out to us! We're excited to review the details of your project and start working with you. Here's a quick summary of the information you've provided:

                - Client Name: ${clientName}
                - Organization Name: ${organizationName}
                - Email Address: ${email}
                - Contact Number: ${phNumber}
                - Project Brief: ${projectBrief}

                Our team will carefully review your request, and we'll get back to you shortly with the next steps.

                We're committed to helping you bring your vision to life and look forward to collaborating on your project!

                If you have any questions in the meantime, feel free to reach out to us at any time.

                Thank you once again, and we can't wait to start this exciting journey with you!

                Warm regards,  
                Startexs Team  
                8287890112
                http://www.startexs.com
                `

        });

        // Sending email to the admin
        await transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            to: `${process.env.ADMIN_EMAIL}, singh.dewang007@gmail.com, amit2010066@akgec.ac.in`,
            subject: "New Project Submission",
            text: `Hello Admin,\n\n
                We have received a new project submission! Here are the details for your review:

                - Client Name: ${clientName}
                - Organization Name: ${organizationName}
                - Client Email: ${email}
                - Contact Number: ${phNumber}
                - Project Brief: ${projectBrief}

                Please check your admin portal for more detailed information about this submission.  
                Our team will be reviewing this request shortly and will reach out to the client for the next steps.

                Thank you for managing the submissions, and feel free to reach out if you need any assistance.

                Best regards,  
                Startexs Team  
                8287890112
                http://www.startexs.com
                `

        });

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending email." }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
