import React from 'react';
import { Helmet } from 'react-helmet';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Inqury from '../inqury/Inqury';
import { useState } from 'react';
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Send message to Telegram bot
    const botToken = '6731739605:AAEX9CvgoRlR3BIHhHt3Tq9bsFOs3IDpt0M'; // Replace with your bot token
    const chatId = '@shrigwal'; // Replace with your chat ID
    const message = `Contact Us:
Name: ${e.target.name.value}
Email: ${e.target.email.value}
Phone: ${e.target.phone.value}
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
    <div className="container mt-5">
      <Helmet>
        <title>Contact Us - Shri Gwal Exim Pvt. Ltd.</title>
        <meta name="description" content="Discover top-quality Global foodstuffs exportr ! We specialize in foodstuffs Grains, Pulses, Spices, Edible oils, Fruits & Vegetables, with a strong network of farmers and suppliers, Contact us for your agricultural product needs." />
        <meta name="keywords" content=" we are international Foodstuffs exporter Grains and cereals, Pulses, Spices, Edible oils, Fruits, Vegetables, Farmers, Producers, Suppliers in Netherlands, South Korea, Spain, Hong Kong, Canada, Vietnam, Belgium, Switzer land, Turkey, Poland, Mexico, Taiwan, Thailand, Russia, Singapore, Finland, chile, Colombia, Greece, NewZealand, Israel, Ukraine, Ireland, Hungary, Norway. Food packaging materials, Joint ventures, Reliable exports, contact us shri gwal exim" />
      </Helmet>
      <div className="row">
        <div className="col-md-6">
          <div className="container m-2 shadow " style={{ padding: 40 }}>
            <p><b>Shri Gwal Exim Pvt. Ltd.</b>, we specialize in the global export of premium quality cereals, vegetables, and fruits. Our commitment to excellence and customer satisfaction sets us apart in the industry. Whether you're a importer, distributor, retailer, or wholesaler, we provide tailored solutions to meet your specific needs. With our extensive network and efficient logistics, we ensure timely delivery worldwide.
            </p>
            <div className='col-md-12 text-center'>
              <h2 className='main-heading'>Contact Info</h2>
              <div className='underline mx-auto'></div>
              <p>
                <i class="bi bi-envelope-fill" style={{ marginRight: '0px' }}></i> info@shrigwalexim.com
              </p>
              <p>
                <i class="bi bi-geo-alt-fill" style={{ marginRight: '5px' }}></i> New Delhi, India
              </p>
              <p>
                <i class="bi bi-telephone-fill" style={{ marginRight: '5px' }}></i> +91 9350132742
              </p>
              <p>
                <i className="bi bi-headset" style={{ marginRight: '5px' }}></i> +91 8576891104
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Contact Form Here */}
          <div className="container m-2 shadow " style={{ padding: 20 }}>
            <h2>
              <div className='col-md-12 text-center'>
                <h2 className='main-heading'>Contact Suport 24*7</h2>
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
        </div><hr />
      </div>
    </div>
  )
}
export default Contact;