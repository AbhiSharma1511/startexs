import nodemailer from "nodemailer";

export async function POST(request) {

    const userEmail = await request.json();
    console.log("User Email: ", userEmail);

    const transporter = nodemailer.createTransport({
        // service: 'gmail',  
        // host: 'smtp.gmail.com',  
        // port: 587, 
        service: 'titan',  
        host: process.env.SMTP_HOST,  
        port: process.env.SMTP_PORT, 
        secure: false,
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            to: userEmail,
            subject: "Thank You for Subscribing the Startexs Newsletter",
            text: `Hi there, 👋
            Thank you for subscribing to the Startexs Newsletter! 🎉 We're thrilled to have you as part of our growing community. Get ready for a journey filled with exclusive updates, insights, and all things exciting happening at Startexs.

            As a subscriber, you'll be the first to know about:

            Latest trends in the industry 🌟
            Expert tips and tricks 🧠
            Special promotions and offers 💥
            Behind-the-scenes updates 🚀
            We're passionate about bringing you valuable content that helps you stay ahead of the curve. Whether you're looking for inspiration, industry news, or actionable advice, we;ve got you covered!

            Expect to see our emails in your inbox soon, and don't forget to check your spam folder just in case! 😉

            Once again, thanks for subscribing. We look forward to keeping you informed, inspired, and empowered!

            Warm regards,
            The Startexs Team
            💻 http://www.startexs.in`
        });

        // Sending email to the admin
        await transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            // to: `${process.env.ADMIN_EMAIL}, singh.dewang007@gmail.com, amit2010066@akgec.ac.in`,
            to: `${process.env.ADMIN_EMAIL}`,
            subject: "New Subscription Mail Submission",
            text: `Hello Admin,\n\n
                We have received a email submission! Here are the details for your review:
                - Client Email: ${userEmail}

                Add this mail to your data for sending the newsletter.

                Thank you for managing the submissions, and feel free to reach out if you need any assistance.

                Best regards,  
                Startexs Team  
                8287890112
                http://www.startexs.in
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
