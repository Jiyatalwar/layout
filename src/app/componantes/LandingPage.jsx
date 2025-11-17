'use client'
import Link from 'next/link';
import React, { useState } from 'react';


const LandingPage = () => {
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
  // pop up form start here 

  return (
    <div>
      {/* navbar section */}
      <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-3 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="https://binaryglobal.com/">
           <img
              src="Asests/Binary Logo Blue 1.png"
                alt="Logo"
                width={120}
                height={30}/>

          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.youtube.com/@binaryglobal" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition-transform hover:bg-blue-100 rounded-full '>
            <img
              src="Asests/icons8-youtube-50.png"
                alt="binary global youtube "
                width={24}
                height={24}/>
          </a>
          <a href="https://x.com/binaryglobaldel" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition-transform hover:bg-blue-100 rounded-full '>
             <img
              src="Asests/icons8-twitter-50.png"
                alt="binary global twitter "
                width={24}
                height={24}/>
          </a>
          <a href="https://www.linkedin.com/company/binaryglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition-transform hover:bg-blue-100 rounded-full'>
             <img
              src="Asests/icons8-linkedin-50.png"
                alt="binary global linkdin"
                width={24}
                height={24}/>
          </a>
        </div>
      </div>
    </nav>
    {/* navbar section end  */}

    
    {/* header section  */}
    <header className="">
      {/* hero section */}
    
<section className="w-full h-[500px] bg- bg-gradient-to-r from-[#5C258D] to-[#4389A2]  relative">
  {/* Background image for small screens */}
  <div className="md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('Asests/image.png')" }}></div>

  <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
    {/* Left Column: Hero Content */}
    {/* Apply slideInLeft to the content column */}
    <div className="flex flex-col justify-center px-6 py-8 md:px-12 md:py-16 slideInLeft">
      <h1 className=" sm:ml-24  sm:text-[70px] text-5xl font-black text-white  mb-4">
       SOC as a Service<br/>
       <span className='sm:font-bold  sm:text-[60px] text-white '>(SOCaaS)</span>
      </h1>
      <p className=" sm:ml-24 sm:text-3xl text-lg  text-white  font-bold mb-5 ">
       Smart. Scalable. Always On.
      </p>
      <p className=" sm:ml-24 sm:text-xl text-lg text-left text-white  font-thin  mb-6">
       Next-gen Security Operations Center as a Service,
       tailored for the modern enterprise.
      </p>
      <div className="sm:ml-24 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
        <button className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 inline-block bg-[#6930c3] text-white font-bold  border-2  border-blue-100  px-6 py-3 rounded-full text-lg hover:bg-[#c55df6] hover:text-white  whitespace-nowrap">
            Free SOCaaS Demo
        </button>
        <button className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  inline-block bg-transparent border-2  font-bold border-blue-100 text-white px-6 py-3 rounded-full text-lg hover:bg-[#c55df6] hover:text-white whitespace-nowrap">
           Speak to a Cybersecurity Expert
        </button>
        <button className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 inline-block bg-transparent border-2 font-bold border-blue-100 text-white  px-6 py-3 rounded-full text-lg hover:bg-[#c55df6] hover:text-white whitespace-nowrap">
           Download the SOCaaS Datasheet
        </button>
      </div>
    </div>

    {/* Right Column: Hero Image (visible only on md and larger screens) */}
    {/* Apply slideInRight to the image column */}
    <div className="relative hidden md:block slideInRight">
      <img
        src="Asests/image.png"
        alt="Hero Image"
        className="object-contain  sm:ml-50 "
        width={513}
        height={513}
      />
    </div>
  </div>
</section>

{/* hero section end  */}

    </header>
   {/* header section end  */}




    {/* about us  start here  */}
    <section className=" about-section w-full py-16">
  <div className="max-w-screen-xl mx-auto px-6 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-left">
      {/* Left Column: Image */}
      <div className="relative zoom-slide-down">
        <img
          src="Asests/landing-img/Security.017 1 (1).png"
          alt="About Us"
          className="object-cover sm:w-[450px] sm:h-[450px]"
        />
      </div>

      {/* Right Column: Text Content */}
      <div className='zoom-slide-down'>
      <h2 className="sm:text-[70px] text-7xl font-black text-blue-400 mb-6">
       About Our SOCaaS
      </h2>

    <div className="relative w-[200px] h-1  bg-blue-400  mb-10 rounded-full overflow-hidden">
      <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
    </div>

        <p className=" sm:text-[30px] text-4xl font-bold  mb-6">
           In today’s threat landscape, every second counts.  </p>

        <div className="blue-blended-circle mt-25"></div>

        <p className="sm:text-[24px] sm:text-[#090909]  text-2xl text-justify  font-thin text-gray-600 mb-2">
           <span className='font-bold '>Binary Global’s SOCaaS </span> is your always-on, AI-augmented security layer that
           combines 24/7 threat detection, real-time incident response, and deep
           analytics without the complexity or cost of building your own SOC. </p>

      </div>
    </div>
  </div>
</section>
{/* about us end here  */}


{/* capability section */}
<section className="Capabilty-section  w-full py-10 bg-white">
  <div className="max-w-screen-xl mx-auto px-6">
    {/* Section header */}
    <div className="text-left mb-12">
      <h2 className="sm:text-[70px] sm:ml-[24px] text-7xl font-black text-blue-400 mb-6">
        Capabilities
      </h2>
      {/* animated line */}
      <div className="relative w-[200px] h-1 sm:ml-[24px] bg-blue-400 mb-10 rounded-full overflow-hidden">
        <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
      </div>
    </div>
 <div className="pink-blended-circle"></div>
    {/* Grid: First row */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col items-center ">
        <img
          src="Asests/landing-img/Debugging.png"
          alt="24/7 Security Monitoring"
          className="w-[250px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">24/7 Security Monitoring </h4>
      </div>

      <div className="flex flex-col items-center ">
        <img
          src="Asests/landing-img/MItM.png"
          alt="Rapid Incident Response  "
          className="w-[250px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Rapid Incident Response  </h4>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/Bug Hunter.png"
          alt="Behavioral Analytics & Threat Hunting "
          className="w-[250px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Behavioral Analytics & Threat Hunting </h4>
      </div>
    </div>

    {/* Second row of services */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/Access Locked.png"
          alt="SIEM & SOAR Integration  "
          className="w-[250px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">SIEM & SOAR Integration  </h4>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/image.png"
          alt="Cloud-Native & Scalable"
          className="w-[250px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Cloud-Native & Scalable</h4>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/Biometric authentication.png"
          alt="Regulatory Compliance Support "
          className="w-[250px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Regulatory Compliance Support </h4>
      </div>
    </div>
  </div>
</section>
{/* capability section */}


 {/* Why Choose Us Section */}
<section className="w-full h-[600px] bg-gradient-to-r from-[#845ec2] to-[#E2E1E8] relative overflow-hidden ">
  <div className="max-w-screen-xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
    {/* Left Side: Text Content */}
    <div className="text-white space-y-6">
      <h1 className="sm:text-[72px] sm:mt-2 sm:ml-5 text-4xl font-black sm:whitespace-nowrap mb-10">
        Why Choose Binary Global SOCaaS?
      </h1>
      <h4 className="sm:text-[30px] sm:ml-5 font-bold  text-justify sm:whitespace-nowrap  mb-10">
       We bring together industry-certified experts, AI-driven automation, and global<br/> best practices to deliver
       proactive cyber defense as a service with<br/> speed, scalability, and simplicity.
      </h4>
        <ul className="space-y-3 list-none">
          <li className="flex sm:text-[25px] sm:ml-5 font-bold sm:whitespace-nowrap mb-8">
            <span className="font-bold  mr-2">•</span>
            <span>24/7 Security Monitoring & Response</span>
          </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-bold whitespace-nowrap mb-8 ">
          <span className="font-bold mr-2">•</span>
          <span>AI-Driven Threat Detection & Analytics</span>
        </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-bold whitespace-nowrap mb-8">
          <span className="font-bold mr-2">•</span>
          <span>Scalable Solutions Tailored to You</span>
        </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-bold whitespace-nowrap mb-8">
          <span className="font-bold mr-2">•</span>
          <span>Expert Team & Compliance Support</span>
        </li>
      </ul>
    </div>

    {/* Right Side: Bottom-Aligned Image */}
    <div className="hidden md:flex justify-end">
      <img
        src="Asests/landing-img/Career decision 1.png"
        alt="Why Choose Us"
        className="w-[600px] h-auto object-contain align-bottom"
        style={{ position: 'absolute', bottom:-120, right: 0 }}
      />
    </div>
  
  </div>
</section>


{/* why choose end  */}


{/* service card section  */}
<section className="service-section w-full py-10 bg-white">
  <div className="max-w-screen-xl mx-auto px-6">
    {/* Section header */}
    <div className="text-left mb-12">
      <h2 className="sm:text-[70px] text-7xl font-black text-blue-400 mb-6">
        Who Is SOCaaS For?
      </h2>
       
      {/* Animated line */}
      <div className="relative w-[200px] h-1 sm:ml-[24px] bg-blue-400 mb-10 rounded-full overflow-hidden">
        <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
      </div>
    </div>
    

    {/* Grid: Four columns */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/business-associates-comparing-key-performance-indi-2025-02-19-23-35-39-utc 1.png"
          alt="Organizations without an internal SOC"
          className="w-full max-w-[200px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Organizations without an internal SOC
        </h4>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/vertical-photo-of-a-man-uses-cloud-computing-on-hi-2024-12-06-18-53-06-utc 2.png"
          alt="Rapid Incident Response"
          className="w-full max-w-[200px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Enterprises seeking to reduce security TCO
        </h4>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/business-associates-comparing-key-performance-indi-2025-02-19-23-35-39-utc 2.png"
          alt="Proactive Threat Hunting"
          className="w-full max-w-[200px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Regulated industries needing real-time compliance insights
        </h4>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="Asests/landing-img/vertical-photo-of-a-man-uses-cloud-computing-on-hi-2024-12-06-18-53-06-utc 1.png"
          alt="Companies scaling cloud environments"
          className="w-full max-w-[200px] h-auto object-cover mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Companies scaling cloud environments
        </h4>
      </div>
    </div>
  </div>
</section>
{/* service card end */}

{/*Banafits section start here  */}
<section className=" about-section w-full py-16">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-centert">
      {/* Left Column: Image */}
      <div className="relative">
        <img
          src="Asests/landing-img/iluminat.svg"
          alt="About Us"
          className="object-cover sm:w-[600px] sm:mt-20  sm:h-[450px]"
        />
      </div>

      {/* Right Column: Text Content */}
      <div>
      <h2 className="sm:text-[70px] text-7xl font-black text-blue-400 mb-6">
       Business Benefits
      </h2>
    <div className="relative w-[200px] h-1  bg-blue-400  mb-10 rounded-full overflow-hidden">
      <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
    </div>
     <div className="blue-blended-circle mt-50"></div>


      <ul className="space-y-3 list-none text-jutify ">
          <li className="flex sm:text-[25px] sm:ml-5 font-medium  sm:whitespace-nowrap mb-8">
            <span className="font-semibold text-blue-800 mr-2 text-3xl ">•</span>
            <span> 24x7 Threat Monitoring  </span>
          </li>

        <li className="flex sm:text-[25px] sm:ml-5 font-medium whitespace-nowrap mb-8 ">
          <span className="font-bold text-blue-800 mr-2 text-3xl">•</span>
          <span>Real-Time Alerts & Rapid Containment  </span>
        </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-medium whitespace-nowrap mb-8">
          <span className="font-bold text-blue-800 mr-2 text-3xl">•</span>
          <span>AI-Powered Threat Intelligence  </span>
        </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-medium whitespace-nowrap mb-8">
          <span className="font-bold text-blue-800 mr-2 text-3xl">•</span>
          <span>Integrated SIEM + SOAR Capabilities  </span>
        </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-medium whitespace-nowrap mb-8">
          <span className="font-bold text-blue-800 mr-2 text-3xl">•</span>
          <span>Compliance-Ready Reports  </span>
        </li>
        <li className="flex sm:text-[25px] sm:ml-5 font-medium whitespace-nowrap mb-8">
          <span className="font-bold text-blue-800 mr-2 text-3xl">•</span>
          <span>Cloud & Hybrid Security Support</span>
        </li>
      </ul>
      </div>
    </div>
  </div>
</section>
{/* Benefits section end here  */}

{/*expertise section staart here */}
<section className="w-full py-16 bg-gradient-to-r from-[#E2E1E8] to-[#845ec2]">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="flex justify-center items-center">
      <div className="main-card bg-white p-6 sm:p-10 rounded-3xl w-full sm:max-w-4xl text-center relative overflow-hidden
                      h-auto sm:h-[400px]">
        {/* Company Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-blue-400  mb-6 sm:mt-5">
          Backed by Binary Expertise
        </h1>
        

        {/* Tagline */}
        <div className=" sm:ml-10  ml-15 relative w-[200px] h-1  bg-blue-400  mb-10 rounded-full overflow-hidden">
         <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
        </div>
        <h6 className="text-base  text-center sm:text-xl md:text-2xl font-black text-gray-600  mb-4">
          Binary Global is trusted by enterprises across BFSI,
          healthcare, government, and manufacturing.
        </h6>

        {/* Description */}
        <p className="text-sm sm:text-lg text-center md:text-2xl font-medium  text-gary-600  px-4 sm:px-0">
          We combine deep security expertise, robust infrastructure, and customer-first delivery to help
          organizations detect, respond, and recover faster.
        </p>
      </div>
    </div>
  </div>
</section>



{/* expertise section end here  */}

{/* FAQ Section */}
<section className="w-full py-16 bg-white">
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="sm:text-[70px] text-5xl font-black text-blue-400 mb-6">
       Frequently Asked Questions
      </h2>
      <div className="relative w-[200px] h-1 mx-auto bg-blue-400 mb-10 rounded-full overflow-hidden">
        <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
      </div>
    </div>

    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <input type="checkbox" id="faq1" className="hidden peer" />
        <label htmlFor="faq1" className="flex justify-between items-center p-5 cursor-pointer text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100">
          <span>How fast can SOCaaS be deployed?</span>
          <svg className="w-6 h-6 transform transition-transform duration-300 peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </label>
        <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-screen">
          <p className="p-5 text-gray-600 text-base">
             Within days, with minimal setup required. 
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <input type="checkbox" id="faq2" className="hidden peer" />
        <label htmlFor="faq2" className="flex justify-between items-center p-5 cursor-pointer text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100">
          <span>Is SOCaaS suitable for regulated industries? </span>
          <svg className="w-6 h-6 transform transition-transform duration-300 peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </label>
        <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-screen">
          <p className="p-5 text-gray-600 text-base">
             Absolutely. It supports GDPR, HIPAA, ISO 27001, NIST, and other frameworks. 
          </p>
        </div>
      </div>
       


      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <input type="checkbox" id="faq3" className="hidden peer" />
        <label htmlFor="faq3" className="flex justify-between items-center p-5 cursor-pointer text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100">
          <span>Will it integrate with my existing tools? </span>
          <svg className="w-6 h-6 transform transition-transform duration-300 peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </label>
        <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-screen">
          <p className="p-5 text-gray-600 text-base">
            Yes. SOCaaS is tech-agnostic and integrates with most SIEMs, EDR, cloud platforms, and firewalls.  
          </p>
        </div>
      </div>   
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <input type="checkbox" id="faq4" className="hidden peer" />
        <label htmlFor="faq4" className="flex justify-between items-center p-5 cursor-pointer text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100">
          <span>How SOCaaS improves Cybersecurity?</span>
          <svg className="w-6 h-6 transform transition-transform duration-300 peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </label>
        <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-screen">
          <p className="p-5 text-gray-600 text-base">
           SOCaaS provides 24/7 monitoring, advanced threat detection, and quick incident response. It brings to the table cost effective, scalable, and compliance ready protection for today’s businesses.
          </p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <input type="checkbox" id="faq5" className="hidden peer" />
        <label htmlFor="faq5" className="flex justify-between items-center p-5 cursor-pointer text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100">
          <span> Is SOC as a Service suitable for small business? </span>
          <svg className="w-6 h-6 transform transition-transform duration-300 peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </label>
        <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-screen">
          <p className="p-5 text-gray-600 text-base">
             Yes. SocaaS provides small and growing businesses with enterprise level security at an affordable price which also includes protection against cyber threats. 
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* FAQ Section End */}


{/*footer with cta section start here   */}

<footer className="w-full bg-gradient-to-r from-[#845ec2] to-[#E2E1E8] py-12">
  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Section - Get Started Form */}
    <div>
      <h2 className="sm:text-[70px] text-5xl font-black text-white mb-6 sm:whitespace-nowrap">
        Get Started SOCaaS
      </h2>
       <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName" // Add name attribute
          placeholder="Full Name*"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-4 bg-white font-bold border-4 border-[#845ec2] rounded-xl text-black placeholder-[#845ec2] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="contactNumber" // Add name attribute
          placeholder="Contact Number*"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-4 bg-white font-bold border-4 border-[#845ec2] rounded-xl text-black placeholder-[#845ec2] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <input
        type="email"
        name="emailAddress" // Add name attribute
        placeholder="Email Address*"
        value={formData.emailAddress}
        onChange={handleChange}
        className="w-full p-4 bg-white font-bold border-4 border-[#845ec2] rounded-md text-black placeholder-[#845ec2] focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="comment" // Add name attribute
        placeholder="Leave a comment here"
        rows="4"
        value={formData.comment}
        onChange={handleChange}
        className="w-full p-6 bg-white font-bold border-4 border-[#845ec2] rounded-md text-black placeholder-[#845ec2] focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="w-auto px-15 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full sm:ml-5 transition duration-300 ease-in-out"
      >
        Submit Form
      </button>
      {submitStatus && <p className="text-center mt-4">{submitStatus}</p>}
    </form>
    </div>

    {/* Right Section - Contact Info */}
    <div className="text-white md:text-right">
      {/* Logo Section */}
      <div className="mb-8 flex justify-left md:justify-end">
        <img
          src="Asests/Binary Logo Blue 1.png" // Replace with your logo's path
          alt="Binary Global Logo"
          className="w-35 h-auto" // Adjust size as needed
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
      className="w-8 h-8 mr-3 mb-4 "
    />
    <div>
      <p className="font-medium text-2xl">+91 11 40140000</p>
      <p className="font-medium text-2xl">1800 102 3579</p>
    </div>
  </div>

  {/* Email Address */}
  <div className="flex items-center md:justify-end ">
    <img
      src="Asests/footericon/ic_round-email.png"
      alt="Email Icon"
      className="w-8 h-8 mr-3"
    />
    <p className="font-medium text-2xl">contact@binaryglobal.com</p>
  </div>

  {/* Office Address */}
  <div>
    <h4 className="text-3xl text-[#845ec2] font-black mb-2">Corporate Head Office</h4>
    <div className="flex items-center md:justify-end ">
      <img
        src="Asests/footericon/mdi_location.png"
        alt="Location Icon"
        className="w-9 h-9  mr-3 mb-4"
      />
      <address className="not-italic font-semibold text-2xl">
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


{/*fooyter with cta section end here   */}

  
    </div>
  )
}

export default LandingPage