'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import DemoFormPopup from './DemoFormPopup'; 
import DatasheetDownloadFormPopup from './DatasheetDownloadFormPopup'; 

const Header = () => {
  // State to control the visibility of the pop-up forms
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [showDatasheetPopup, setShowDatasheetPopup] = useState(false); 

  // Handler to open the Demo Form Popup
  const handleOpenDemoPopup = () => {
    setShowDemoPopup(true);
  };

  // Handler to close the Demo Form Popup
  const handleCloseDemoPopup = () => {
    setShowDemoPopup(false);
  };

  // NEW HANDLERS for the Datasheet Download Form Popup
  const handleOpenDatasheetPopup = () => {
    setShowDatasheetPopup(true);
  };

  const handleCloseDatasheetPopup = () => {
    setShowDatasheetPopup(false);
  };

 

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
                height={30}
              />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/@binaryglobal" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition-transform hover:bg-blue-100 rounded-full '>
              <img
                src="Asests/icons8-youtube-50.png"
                alt="binary global youtube "
                width={24}
                height={24}
              />
            </a>
            <a href="https://x.com/binaryglobaldel" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition-transform hover:bg-blue-100 rounded-full '>
              <img
                src="Asests/icons8-twitter-50.png"
                alt="binary global twitter "
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.linkedin.com/company/binaryglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition-transform hover:bg-blue-100 rounded-full'>
              <img
                src="Asests/icons8-linkedin-50.png"
                alt="binary global linkdin"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </nav>
      {/* navbar section end  */}


      {/* header section  */}
      <header className="">
        {/* hero section */}
        <section className="w-full sm:h-[600px] h-[600px] bg-[linear-gradient(283.22deg,_#0A3084_0%,_#1C2436_44.46%,_#1B214B_95.12%)]
    shadow-[5px_5px_10.1px_rgba(132,175,155,0.25)]  relative">
           
          {/* <div
            className="md:hidden  absolute inset-y-0 left-4 right-4 bg-contain bg-no-repeat bg-center rounded-xl z-0"
            style={{ backgroundImage: "url('Asests/image.png')" }}
            aria-hidden="true"
          ></div> */}
          
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 h-full relative z-10">
            {/* Left Column: Hero Content */}
            <div className="flex flex-col justify-center px-6 py-8 md:px-12 md:py-16 slideInLeft">
              <h1 className=" sm:ml-15  sm:text-[70px] text-5xl font-black text-white  mb-4">
                SOC as a Service<br />
                <span className='sm:font-bold  sm:text-[60px] text-white '>(SOCaaS)</span>
              </h1>
              <p className=" sm:ml-15 sm:text-3xl text-lg  text-white  font-bold mb-5 ">
                Smart. Scalable. Always On.
              </p>
              <p className=" sm:ml-15 sm:text-xl text-lg text-left text-white  font-thin  mb-6">
                Next-gen Security Operations Center as a Service,
                tailored for the modern enterprise.
              </p>
              <div className="sm:ml-15 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
                 <button
                  onClick={handleOpenDemoPopup} className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1
         hover:scale-110  inline-block bg-transparent border-2  font-medium border-blue-100 text-white px-6 py-3
          rounded-full text-md hover:bg-[#596FD7] hover:text-white whitespace-nowrap">
                 Book a free SocaaS demo 
                </button>
                <button
                  onClick={handleOpenDemoPopup} className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1
         hover:scale-110  inline-block bg-transparent border-2  font-medium border-blue-100 text-white px-6 py-3
          rounded-full text-md hover:bg-[#E3C76C] hover:text-white whitespace-nowrap">
                  Speak to a Cybersecurity Expert
                </button>
                
               <button               
  onClick={handleOpenDatasheetPopup}
  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 inline-block bg-transparent border-2 font-medium border-blue-100 text-white px-6 py-3 rounded-full text-md hover:bg-[#E85FE5] hover:text-white whitespace-nowrap"
>
  Download the SOCaaS Datasheet
</button>
              </div>
            </div>

            {/* Right Column: Hero Image (visible only on md and larger screens) */}
            <div className="relative ml-10 mt-10  hidden md:block slideInRight">
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

      {/* Render the DemoFormPopup if showDemoPopup is true */}
      {showDemoPopup && <DemoFormPopup onClose={handleCloseDemoPopup} />}

      {/* Render the DatasheetDownloadFormPopup if showDatasheetPopup is true */}
      {showDatasheetPopup && <DatasheetDownloadFormPopup onClose={handleCloseDatasheetPopup} />} {/* <--- THIS IS THE KEY ADDITION */}
    </div>
  )
}

export default Header;