'use client'
import React, { useState } from 'react';

const DatasheetDownloadFormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Submitting...');

    try {
      // Send data to your API endpoint
     const response = await fetch('/api/datasheet', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

      if (response.ok) {
        setSubmissionStatus('Data saved successfully! Downloading datasheet...');
        const link = document.createElement('a');
        link.href = '/Asests/SOCaaS_Datasheet.pdf'; 
        link.download = 'SOCaaS_Datasheet.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Error: ${errorData.message || 'Failed to save data.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('An unexpected error occurred. Please try again.');
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
          download  <br/> SOCaaS Datasheet
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"   
      className="w-full p-4 bg-white font-medium border-2 border-[#1B214B] rounded-xl text-black
        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"  
      className="w-full p-4 bg-white font-medium border-2 border-[#1B214B] rounded-xl text-black
        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  <input
    type="text"
    id="company"
    name="company"
    value={formData.company}
    onChange={handleChange}
    placeholder="Enter your company name"  
    className="w-full p-4 bg-white font-medium border-2 border-[#1B214B] rounded-md text-black
      placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  {submissionStatus && (
    <p className={`mb-4 text-center ${submissionStatus.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
      {submissionStatus}
    </p>
  )}

  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-[#596FD7] hover:bg-teal-500 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
    >
      Download Datasheet
    </button>
  </div>
</form>
      </div>
    </div>
  );
};

export default DatasheetDownloadFormPopup;