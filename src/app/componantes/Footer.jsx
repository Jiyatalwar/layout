'use client'
 import React, { useState } from 'react';


const Footer = () => {
    // footer form  data 
       const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        comment: '',
      });
      const [submitStatus, setSubmitStatus] = useState(''); // To show success/error messages
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting...');
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setSubmitStatus('Form submitted successfully!');
            setFormData({ // Clear form after successful submission
              fullName: '',
              contactNumber: '',
              emailAddress: '',
              comment: '',
            });
          } else {
            setSubmitStatus(`Error: ${data.message || 'Something went wrong.'}`);
          }
        } catch (error) {
          console.error('Network or server error:', error);
          setSubmitStatus('Error: Could not connect to the server.');
        }
      };
      // footer form  data end
  return (
    <div>
      {/*footer with cta section start here   */}

<footer className="w-full bg-[linear-gradient(283.22deg,_#0A3084_0%,_#1C2436_44.46%,_#1B214B_95.12%)]
    shadow-[5px_5px_10.1px_rgba(132,175,155,0.25)]  py-12">
  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
    {/* Left Section - Get Started Form */}
    <div>
      <h2 className="sm:text-[70px] text-5xl font-black text-white mb-6 sm:whitespace-nowrap">
        Get Started SOCaaS
      </h2>
       <form onSubmit={handleSubmit} className="space-y-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName" // Add name attribute
          placeholder="Full Name*"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-4 bg-white font-medium  border-2  border-[#1B214B] rounded-xl text-black placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="contactNumber" // Add name attribute
          placeholder="Contact Number*"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-4 bg-white font-medium border-2 border-[#1B214B] rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <input
        type="email"
        name="emailAddress" // Add name attribute
        placeholder="Email Address*"
        value={formData.emailAddress}
        onChange={handleChange}
        className="w-full p-4 bg-white font-medium border-4 border-[#1B214B] rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="comment" // Add name attribute
        placeholder="Leave a comment here"
        rows="4"
        value={formData.comment}
        onChange={handleChange}
        className="w-full p-6 bg-white font-medium border-2 border-[#1B214B] rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1
         hover:scale-110  inline-block bg-transparent border-2  font-medium border-blue-100 text-white px-6 py-3
          rounded-full text-md hover:bg-[#E85FE5] hover:text-white whitespace-nowrap"
      >
        Submit Form
      </button>
      {submitStatus && <p className="text-center text-white mt-4">{submitStatus}</p>}
    </form>
    </div>

    {/* Right Section - Contact Info */}
    <div className="text-white md:text-right">
      {/* Logo Section */}
      <div className="mb-8 flex justify-left md:justify-end">
        <img
          src="Asests/Binary Logo White 1.png"
          alt="Binary Global Logo"
          className="sm:w-35 w-[110px] sm:h-10 sm:ml-4 ml-10 h-auto" // Adjust size as needed
        />
      </div>
      {/* Contact Information */}
      {/* Contact Information */}
<div className="space-y-4">
  {/* Phone Numbers */}
  <div className="flex items-center md:justify-end ">
    <img
      src="Asests/footericon/material-symbols_call.png"
      alt="Phone Icon"
      className="sm:w-8 sm:h-8 mb-4 "
    />
    <div>
      <p className="font-medium sm:text-2xl text-[18px] ml-3">+91 11 40140000</p>
      <p className="font-medium sm:text-2xl text-[18px] ml-4">1800 102 3579</p>
    </div>
  </div>

  {/* Email Address */}
  <div className="flex items-center md:justify-end ">
    <img
      src="Asests/footericon/ic_round-email.png"
      alt="Email Icon"
      className="sm:w-8 sm:h-8"
    />
    <p className="font-medium sm:text-2xl text-[18px] ml-3">contact@binaryglobal.com</p>
  </div>

  {/* Office Address */}
  <div>
    <h4 className="sm:text-3xl sm:text-2xl text-xl text-white font-black mb-2">Corporate Head Office</h4>
    <div className="flex items-center md:justify-end ">
      <img
        src="Asests/footericon/mdi_location.png"
        alt="Location Icon"
        className="sm:w-9 sm:h-9  mb-4"
      />
      <address className="not-italic font-semibold sm:text-2xl text-[18px] ml-3 ">
        C-145, Okhla Phase-1,
        <br />
        New Delhi-110020
      </address>
    </div>
  </div>
</div>

    </div>
  </div>

  <div className="mt-12 text-center text-white font-semibold text-sm">
    <p>&copy;2025 Binary Global Limited. All Rights Reserved.</p>
  </div>
</footer>


    </div>
  )
}

export default Footer
