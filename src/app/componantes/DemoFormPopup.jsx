import React, { useState } from 'react';

const DemoFormPopup = ({ onClose }) => {

  // footer form data
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    comment: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');

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
        setFormData({
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

  return (
<div
  className="
    fixed inset-0 flex justify-center items-center z-50
    bg-[linear-gradient(283.22deg,_rgba(10,48,132,0.5)_0%,_rgba(28,36,54,0.5)_44.46%,_rgba(27,33,75,0.5)_95.12%)]
    shadow-[5px_5px_10.1px_rgba(132,175,155,0.25)]
  "
>     <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-4 relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#1B214B] hover:text-gray-900 text-3xl font-semibold"
        >
          &times;
        </button>

        <h2 className="text-4xl font-seminold  text-[#1B214B] mb-6 text-left">
          Request a Free<br/> SOCaaS Demo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-4 bg-white font-medium  border-2 border-[#1B214B] rounded-xl text-black
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number*"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-4 bg-white font-medium border-2 border-[#1B214B] rounded-xl text-black
               placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address*"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full p-4 bg-white font-medium border-2 border-[#1B214B] rounded-md text-black
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="comment"
            placeholder="Leave a comment here"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-6 bg-white font-medium border-2 border-[#1B214B] rounded-md text-black
            placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-auto px-15 py-3 bg-[#596FD7]  hover:bg-teal-500 text-white
             font-medium rounded-full sm:ml-5 transition duration-300 ease-in-out"
          >
            Submit Form
          </button>

          {submitStatus && <p className="text-center mt-4">{submitStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default DemoFormPopup;
