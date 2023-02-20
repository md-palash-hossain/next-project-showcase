import Link from 'next/link';
import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex fixed top-0 w-full items-center justify-between  py-1 bg-white border-b-4 border-gray-200 z-10">
      <div className="flex items-center">
        {/* <img src="/logo.svg" alt="Nirdisto logo" className="w-16" /> */}
        <h1>
         <Link href={'/'}>
         Nirdisto
         </Link> 
          </h1>
     
      </div>
      <button
        className=" absolute right-3 top-3 block text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        }  md:flex md:items-center w-full md:w-auto text-sm`}
      >
    
          {
            ['Services','Process','Project','Contact','Faq'].map((link)=><a key={link}
            href="#services"
            className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-600 hover:text-gray-800"
          >
            {link}
          </a>)
          }
      
      </nav>
    </header>
  );
};

export default Header;
