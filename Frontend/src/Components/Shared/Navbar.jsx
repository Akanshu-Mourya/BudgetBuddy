
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className='flex items-center justify-between px-4 lg:px-8 mx-auto max-w-7xl h-16'>
        {/* Logo */}
        <div>
          <h1 className='text-2xl font-bold'>
            Budget<span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>Buddy</span>
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className='block lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-xl'>
            {isMobileMenuOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`flex justify-center flex-grow ${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <ul className='flex justify-center items-center flex-col md:flex-row font-medium gap-10'>
            <li>
              <Link to="/" className='hover:text-[#257c8a] transition duration-300'>Home</Link>
            </li>
            <li>
              <Link to="/features" className='hover:text-[#257c8a] transition duration-300'>Features</Link>
            </li>
            <li>
              <Link to="/about" className='hover:text-[#257c8a] transition duration-300'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:text-[#257c8a] transition duration-300'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Login and Register */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-4 md:mt-0">
          <div className='flex items-center gap-2'>
            <Link to="/signup" className="bg-[#257c8a] text-white py-2 px-7 rounded-md hover:bg-[#2a8e9e] transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
