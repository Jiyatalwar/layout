   'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';



const Body = () => {
  // capablity section zoom in effect when scroll
  const capabilityRefs = useRef([]);
  const [isVisible, setIsVisible] = useState({});
  // service cards reveal refs/state
  const serviceRefs = useRef([]);
  const [serviceVisible, setServiceVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // service cards use data-sindex; capability cards use data-index
        if (entry.target.dataset && typeof entry.target.dataset.sindex !== 'undefined') {
          const sidx = entry.target.dataset.sindex;
          setServiceVisible(prev => ({ ...prev, [sidx]: entry.isIntersecting }));
        } else {
          const cidx = entry.target.dataset.index;
          setIsVisible(prev => ({ ...prev, [cidx]: entry.isIntersecting }));
        }
      });
    }, observerOptions);

    capabilityRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index; 
        observer.observe(ref);
      }
    });

    // observe service cards as well
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.sindex = index;
        observer.observe(ref);
      }
    });

    return () => {
      if (capabilityRefs.current) {
        capabilityRefs.current.forEach(ref => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
      if (serviceRefs.current) {
        serviceRefs.current.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);
  // capablity zoom in effect end 

  return (
    <div>
       {/* about us  start here  */}
    <section className=" about-section w-full py-16">
  <div className="max-w-screen-xl mx-auto px-6 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:items-left items-center">
      {/* Left Column: Image */}
      <div className="relative zoom-slide-down">
        <Image
  src="/Asests/landing-img/Security.017 1 (1).png"
  alt="About Us"
  width={450}
  height={450}
  priority
  className="object-cover w-[350px] h-auto"
/>
      </div>

      {/* Right Column: Text Content */}
      <div className='zoom-slide-down'>
      <motion.h2
              className="sm:text-[70px] text-5xl font-black text-blue-400 mb-5 sm:whitespace-nowrap"
              initial={{ x: 100, opacity: 0 }}            
              whileInView={{ x: 0, opacity: 1 }}            
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 3, ease: 'easeOut' }}
            >
              About Our <br className='sm:hidden block'/> SOCaaS
            </motion.h2>
    <div className="relative  w-[200px] h-1  bg-blue-400  mb-10 rounded-full overflow-hidden">
      <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
    </div>

        <p className=" sm:text-[30px] text-3xl font-bold  mb-6">
           In today’s threat landscape, every second counts.  </p>

        <div className="blue-blended-circle mt-2"></div>

        <p className="sm:text-[24px] sm:text-[#090909]  text-xl text-left  font-thin text-gray-600 ">
           <span className='font-bold '>Binary Global’s SOCaaS </span> is your always-on, AI-augmented security layer that
           combines 24/7 threat detection, real-time incident response, and deep
           analytics without the complexity or cost of building your own SOC. </p>

      </div>
    </div>
  </div>
</section>
{/* about us end here  */}


{/* capability section */}
<section className="Capabilty-section w-full py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="text-left mb-12">

          <motion.h2
            className="sm:text-[70px] sm:ml-[24px] text-6xl font-black text-blue-400 mb-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 3, ease: 'easeOut' }}
          >
            Capabilities
          </motion.h2>
          {/* animated line */}
          <div className="relative w-[200px] h-1 sm:ml-[24px] bg-blue-400 mb-10 rounded-full overflow-hidden slideInLeft">
            <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
          </div>
        </div>
        <div className="pink-blended-circle"></div>
        {/* Grid: First row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: "Asests/landing-img/Debugging.png", alt: "24/7 Security Monitoring", title: "24/7 Security Monitoring" },
            { img: "Asests/landing-img/MItM 2.png", alt: "Rapid Incident Response", title: "Rapid Incident Response" },
            { img: "Asests/landing-img/Bug Hunter.png", alt: "Behavioral Analytics & Threat Hunting", title: "Behavioral Analytics & Threat Hunting" },
            { img: "Asests/landing-img/Access Locked.png", alt: "SIEM & SOAR Integration", title: "SIEM & SOAR Integration" },
            { img: "Asests/landing-img/image.png", alt: "Cloud-Native & Scalable", title: "Cloud-Native & Scalable" },
            { img: "Asests/landing-img/Biometric authentication.png", alt: "Regulatory Compliance Support", title: "Regulatory Compliance Support" },
          ].map((item, index) => (
            <div
              key={index}
              ref={el => capabilityRefs.current[index] = el}
              className={`flex flex-col items-center capability-item ${isVisible[index] ? 'zoom-in' : ''}`}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="sm:w-[250px] w-[120px]  h-auto object-cover mb-4"
              />
              <h4 className="sm:text-2xl text-xl text-center font-bold text-gray-800 mb-2 sm:whitespace-nowrap">{item.title}</h4>
            </div>
          ))}
        </div>

      
      </div>
    </section>
{/* capability section */}


 {/* Why Choose Us Section */}
<section
  className="w-full sm:h-[600px] h-[550px] relative overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #0D2F5C 0%, #091B33 100%)",
  }}
>
  <div className="max-w-screen-xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
    {/* Left Side: Text Content */}
    
    <div className="text-white space-y-6">
       <motion.h1
            className="sm:text-[72px] sm:mt-2 sm:ml-5 text-5xl font-black sm:whitespace-nowrap sm:mb-10 mb-5"
            initial={{ scale: 0.8, opacity: 0 }}            
            whileInView={{ scale: 1, opacity: 1 }}    
            viewport={{ once: true, amount: 0.2 }}      
            transition={{ duration: 3, ease: 'easeOut' }}
          >
            Why Choose Binary Global SOCaaS?
          </motion.h1>
      <h4 className="sm:text-[24px] sm:ml-5 font-bold  text-left sm:whitespace-nowrap  mb-8">
       We bring together industry-certified experts, AI-driven automation, and global<br className='sm:block hidden'/> best practices to deliver
       proactive cyber defense as a service with<br className='sm:block hidden'/> speed, scalability, and simplicity.
      </h4>
        <ul className="space-y-3 list-none">
          <li className="flex sm:text-[24px] sm:ml-5 font-bold sm:whitespace-nowrap mb-8">
            <span className="font-bold  mr-2">•</span>
            <span>24/7 Security Monitoring & Response</span>
          </li>
        <li className="flex sm:text-[24px] sm:ml-5 font-bold whitespace-nowrap mb-8 ">
          <span className="font-bold mr-2">•</span>
          <span>AI-Driven Threat Detection & Analytics</span>
        </li>
        <li className="flex sm:text-[24px] sm:ml-5 font-bold whitespace-nowrap mb-8">
          <span className="font-bold mr-2">•</span>
          <span>Scalable Solutions Tailored to You</span>
        </li>
        <li className="flex sm:text-[24px] sm:ml-5 font-bold whitespace-nowrap mb-8">
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
      <motion.h2
  className="sm:text-[70px] text-5xl font-black text-blue-400 mb-6"
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 3, ease: 'easeOut' }}
>
  Who Is SOCaaS For?
</motion.h2>
       
      {/* Animated line */}
      <div className="relative w-[200px] h-1 sm:ml-[24px] bg-blue-400 mb-10 rounded-full overflow-hidden">
        <span className="moving-white-line absolute h-[10px] bg-white rounded-full"></span>
      </div>
    </div>
    

    {/* Grid: Four columns */}
    <div className="mt-12 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-9 text-center">
      {[
        {
          img: "Asests/landing-img/business-associates-comparing-key-performance-indi-2025-02-19-23-35-39-utc 1.png",
          alt: "Organizations without an internal SOC",
          title: "Organizations without an internal SOC"
        },
        {
          img: "Asests/landing-img/vertical-photo-of-a-man-uses-cloud-computing-on-hi-2024-12-06-18-53-06-utc 2.png",
          alt: "Rapid Incident Response",
          title: "Enterprises seeking to reduce security TCO"
        },
        {
          img: "Asests/landing-img/business-associates-comparing-key-performance-indi-2025-02-19-23-35-39-utc 2.png",
          alt: "Proactive Threat Hunting",
          title: "Regulated industries needing real-time compliance insights"
        },
        {
          img: "Asests/landing-img/vertical-photo-of-a-man-uses-cloud-computing-on-hi-2024-12-06-18-53-06-utc 1.png",
          alt: "Companies scaling cloud environments",
          title: "Companies scaling cloud environments"
        }
      ].map((item, index) => (
        <div
          key={index}
          ref={el => serviceRefs.current[index] = el}
          className={`flex flex-col items-center service-item ${serviceVisible[index] ? 'zoom-in' : ''}`}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <img
            src={item.img}
            alt={item.alt}
            className="w-full max-w-[200px] h-auto object-cover mb-4"
          />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h4>
        </div>
      ))}
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
      <motion.h2
  className="sm:text-[70px] text-7xl font-black text-blue-400 mb-6"
  initial={{ x: 100, opacity: 0 }}      
  whileInView={{ x: 0, opacity: 1 }}     
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 3, ease: 'easeOut' }}
>
  Business Benefits
</motion.h2>
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
<section className="w-full py-16"
 style={{
    background: "linear-gradient(180deg, #0D2F5C 0%, #091B33 100%)",
  }}>
  <div className="max-w-screen-xl mx-auto px-6">
    <div className="flex justify-center items-center">
      <div className="main-card bg-white p-6 sm:p-10 rounded-3xl w-full sm:max-w-4xl text-center relative overflow-hidden
                      h-auto sm:h-[400px]">
        {/* Company Name */}
       <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-black text-blue-400 mb-6 sm:mt-5"
              initial={{ scale: 0.8, opacity: 0 }}        
              whileInView={{ scale: 1, opacity: 1 }}       
              viewport={{ once: true, amount: 0.2 }}       
              transition={{ duration: 3, ease: 'easeOut' }}
            >
  Backed by Binary Expertise
</motion.h1>

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
      <motion.h2
         className="sm:text-[70px] text-5xl font-black text-blue-400 mb-6"
         initial={{ x: -100, opacity: 0 }}           
         whileInView={{ x: 0, opacity: 1 }}          
         viewport={{ once: true, amount: 0.2 }}   
         transition={{ duration: 3, ease: 'easeOut' }}
      >
  Frequently Asked Questions
</motion.h2>
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
        <label htmlFor="faq5" className="flex justify-between items-center p-5 cursor-pointer text-lg font-semibold 
        text-gray-800 bg-gray-50 hover:bg-gray-100">
          <span> Is SOC as a Service suitable for small business? </span>
          <svg className="w-6 h-6 transform transition-transform duration-300 peer-checked:rotate-180" fill="none"
           stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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


    </div>
  )
}

export default Body
