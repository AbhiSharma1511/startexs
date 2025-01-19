'use client'
import React, { useState } from 'react'
import TextLogoSection from '@/components/TextLogoSection';


const ContactUs = () => {

    const headText = `Let's Bring Your Vision to Life 🖐️`
    const text = `Ready to grow your business? Fill out the form below, and let&apos;s start a conversation about your goals and needs.`

    const [formData, setFormData] = useState({
        clientName: "",
        organizationName: "",
        email: "",
        phNumber: "",
        projectBrief: "",
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log("adsdasd", JSON.stringify(formData))
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const result = await response.json();
                    console.log(result);
                } else {
                    console.error('Response is not in JSON format');
                }

                setResponseMessage("Form submitted successfully! Check your email.");
                setFormData({
                    clientName: "",
                    organizationName: "",
                    email: "",
                    phNumber: "",
                    projectBrief: "",
                });
            } else {
                setResponseMessage("Error submitting form. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Error submitting form. Please try again.");
        }
        finally {
            setLoading(false); // Set loading to false once the request is complete
        }
    };

    return (
        <div className='text-white mt-20 px-0 md:px-20'>
            <div className='flex justify-between'>
                <TextLogoSection headText={headText} text={text} />
            </div>
            <div className='flex flex-col md:flex-row gap-10 md:items-center mt-10'>
                <form onSubmit={handleSubmit} className="md:w-[50%] flex flex-col gap-8 px-4 py-6 rounded-lg shadow-lg text-white">
                    {/* Header */}
                    <h1 className="text-2xl font-bold text-center md:text-start mb-4">Tell us more about your project...</h1>

                    {/* Client Name & Organization */}
                    <div className="md:flex md:justify-between gap-6">
                        <div className="flex-1">
                            <label htmlFor="client-name" className="block text-lg font-semibold mb-2">Client Name:</label>
                            <input
                                id="client-name"
                                type="text"
                                name="clientName"
                                value={formData.clientName}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 bg-gray-800 border-2 border-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="e.g., John Doe"
                                required
                            />
                        </div>
                        <div className="flex-1 mt-4 md:mt-0">
                            <label htmlFor="organization-name" className="block text-lg font-semibold mb-2">Organization Name:</label>
                            <input
                                id="organization-name"
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 bg-gray-800 border-2 border-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="e.g., Startexs Private Ltd."
                                required
                            />
                        </div>
                    </div>
                    {/* Professional Email & Contact No */}
                    <div className="md:flex md:justify-between gap-6">
                        <div className="flex-1">
                            <label htmlFor="client-name" className="block text-lg font-semibold mb-2">Professional Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 bg-gray-800 border-2 border-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="e.g., John@statexs.com"
                                required
                            />
                        </div>
                        <div className="flex-1 mt-4 md:mt-0">
                            <label htmlFor="organization-name" className="block text-lg font-semibold mb-2">Contact No:</label>
                            <input
                                id="phNumber"
                                type="number"
                                name="phNumber"
                                value={formData.phNumber}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 bg-gray-800 border-2 border-gray-500 focus:outline-none focus:border-blue-500"
                                placeholder="e.g., 1234567890"
                                required
                            />
                        </div>
                    </div>

                    {/* Project Brief */}
                    <div>
                        <label htmlFor="project-brief" className="block text-lg font-semibold mb-2">Project Brief:</label>
                        <textarea
                            id="project-brief"
                            name="projectBrief"
                            value={formData.projectBrief}
                            onChange={handleChange}
                            rows="6"
                            className="w-full rounded-md px-4 py-2 bg-gray-800 border-2 border-gray-500 focus:outline-none focus:border-blue-500"
                            placeholder="It's a web project for healthcare."
                            required
                        ></textarea>
                    </div>

                    {/* Action Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 rounded-lg shadow-md">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-bold rounded-lg px-6 py-2 transition-transform transform hover:scale-105 hover:bg-blue-700 whitespace-nowrap"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Book Service'}
                        </button>
                        <p className="text-center mt-4 md:mt-0">
                            Or email us directly at{' '}
                            <a href="mailto:contact@startexs.com" className="text-blue-800 font-semibold underline hover:text-blue-900">
                                contact@startexs.com
                            </a>
                        </p>
                    </div>
                    {responseMessage && (
                        <p className="mt-4 text-center text-lg text-green-600">
                            {responseMessage}
                        </p>
                    )}
                </form>
                <div className='md:w-1/2 mx-4 md:mx-0 mb-4 md:mb-0'>
                    <img className='rounded-lg' src='/project-discuss.webp' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;