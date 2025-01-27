import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className='flex items-center justify-between px-4 lg:px-8 mx-auto max-w-7xl h-16'>
        {/* Logo */}
        <div className='h-20 w-20  rounded-full overflow-hidden'>
          <img src="/images/BudgetBuddyLogo.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>
            Budget
            <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
              Buddy
            </span>
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className='block lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-xl'>
            {isMobileMenuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`flex justify-center flex-grow ${isMobileMenuOpen ? 'block' : 'hidden'
            } lg:flex`}
        >
          <ul className='flex justify-center items-center flex-col md:flex-row font-medium gap-10'>
            <li>
              <ScrollLink
                to="hero-section"
                smooth={true}
                duration={500}
                className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="features-section"
                smooth={true}
                duration={500}
                offset={-50} // Adjust offset if needed
                className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
              >
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                smooth={true}
                duration={500}
                offset={-50}
                className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-section"
                smooth={true}
                duration={500}
                offset={-50}
                className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Login and Register */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-4 md:mt-0">
          <div className='flex items-center gap-2'>
            <a
              href="/register"
              className="bg-[#257c8a] text-white py-2 px-7 rounded-md hover:bg-[#2a8e9e] transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
