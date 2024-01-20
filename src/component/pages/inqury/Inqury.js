import React from 'react'
import { useState } from 'react';


const Inqury = () => {
    const [submitted, setSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform form submission logic here

        // Send message to Telegram bot
        const botToken = '6731739605:AAEX9CvgoRlR3BIHhHt3Tq9bsFOs3IDpt0M'; // Replace with your bot token
        const chatId = '@shrigwal'; // Replace with your chat ID
        const message = `New inquiry:
Name: ${e.target.name.value}
Email: ${e.target.email.value}
Phone: ${e.target.phone.value}
Product: ${e.target.product.value}
Country: ${e.target.country.value}
Description: ${e.target.description.value}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`, {
                method: 'POST'
            });

            if (response.ok) {
                setShowSuccess(true);
            } else {
                console.error('Failed to send message to Telegram bot');
            }
        } catch (error) {
            console.error('Error sending message to Telegram bot:', error);
        }
    };
    return (
        <div className="container m-10 shadow " style={{ padding: 40 }}>
            <h2>
                <div className='col-md-12 text-center'>
                    <h2 className='main-heading'>Send Buy Inqury</h2>
                    <div className='underline mx-auto'></div>
                </div>
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name / Company Name / Farm Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email for contact" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="product" className="form-label">Product Name</label>
                    <input type="tel" className="form-control" id="product" placeholder="Enter product name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" placeholder="Enter your country" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {showSuccess && (
                <div className="alert alert-success mt-3" role="alert">
                    Your message has been sent successfully
                </div>
            )}
        </div>
    )
}

export default Inqury;