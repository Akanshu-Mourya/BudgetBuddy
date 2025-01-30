

import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import DarkMode from "@/components/ui/Darkmode";


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from 'lucide-react';
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (


    <div>
      <div className='flex items-center justify-between px-4 lg:px-8 mx-auto max-w-[80%] h-16'>

        {/* Logo and Name */}
        <div className='flex items-center gap-3'>
          <div className='h-20 w-20 rounded-full overflow-hidden'>
            <img src="/images/BudgetBuddyLog1o.jpg" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <h1 className='text-2xl font-bold'>
            Budget
            <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
              Buddy
            </span>
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        {/* <div className='block md:hidden'>
          <button onClick={toggleMobileMenu} className='text-xl '>
            {isMobileMenuOpen ? 'X' : '☰'}
          </button>
        </div> */}

        {/* Navbar Links - Hidden in Mobile */}
        <div className={` md:block flex-grow justify-center  ${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex  mt-28 md:mt-0`}  >
          <ul className='flex justify-center items-center flex-col font-medium md:flex-row lg:gap-10 md:gap-15 gap-2 '>
            <li>
              <ScrollLink to="hero-section" smooth={true} duration={500} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="features-section" smooth={true} duration={500} offset={-50} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about-section" smooth={true} duration={500} offset={-50} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact-section" smooth={true} duration={500} offset={-50} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        {/* {mobail device} */}
        <div className="flex md:hidden items center justify-between px-5 mt-7 h-full">
          <MobileNavbar />
        </div>
        {/* Get Started Button - Always Visible on Large Screens, Moves Down on Small Screens */}
        <div className="hidden md:flex ">
          <Link to="/register" className="bg-[#257c8a] text-white py-2 px-7 rounded-md hover:bg-[#2a8e9e] transition duration-300"
            aria-label="Get Started"
          >
            Get Started
          </Link>
        </div>


        <div className="hidden md:flex py-2 px-2 ">
          <DarkMode />


        </div>

      </div>
      <div className="hidden  justify-center mt-4">
        <Link to="/register" className="bg-[#257c8a] text-white py-2 px-7 rounded-md hover:bg-[#2a8e9e] transition duration-300"
          aria-label="Get Started">
          Get Started
        </Link>
      </div>

    </div>
  );
};

export default Navbar;



const MobileNavbar = () => {
  const role = "instructor"

  return (

    <Sheet >
      <SheetTrigger asChild>
        <Button size="icon" className="rounded-full bg-gray-200 hover:bg-gray-200" variant="ghost">
          <Menu />
        </Button>

      </SheetTrigger>
      <SheetContent className="flex flex-col   bg-white text-black">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>
            Budget
            <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
              Buddy
            </span>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2 " />
        <nav className="flex flex-col space-y-4 font-medium">

          <ul className="flex flex-col space-y-4">
            <li>
              <ScrollLink to="hero-section" smooth={true} duration={500} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="features-section" smooth={true} duration={500} offset={-50} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about-section" smooth={true} duration={500} offset={-50} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact-section" smooth={true} duration={500} offset={-50} className='hover:text-[#257c8a] transition duration-300 cursor-pointer'>
                Contact
              </ScrollLink>
            </li>
          </ul>
          {/* <p>Log out</p> */}
        </nav>
        {
          role === "instructor" && (
            <SheetFooter>
              <SheetClose asChild>
                <div className="flex sm:max-md:flex justify-center mt-4 w-full">
                  <Link to="/register" className="bg-[#257c8a] text-white py-2 px-16 rounded-md hover:bg-[#2a8e9e] transition duration-300"
                    aria-label="Create Account">
                    Get Started
                  </Link>
                </div>
              </SheetClose>
            </SheetFooter>
          )
        }

      </SheetContent>
    </Sheet>
  )
}






// navvar responsive krna h niche  jo vp me code coment h wo code responsive krne ke liye use karna h wo phle ka code h










// ------------------------------------vp---------------
// import React, { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div>
//       <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 mx-auto max-w-[80%] h-16 '>
//         {/* Logo */}
//         <div className='h-20 w-20 rounded-full overflow-hidden '>
//   <img src="/images/BudgetBuddyLogo.jpg" alt="Logo" className="h-full w-full object-cover" />
// </div>

//         <div className=' '>
//           <h1 className='text-2xl font-bold'>
//             Budget
//             <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
//               Buddy
//             </span>
//           </h1>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className='block lg:hidden'>
//           <button onClick={toggleMobileMenu} className='text-xl'>
//             {isMobileMenuOpen ? 'X' : '☰'}
//           </button>
//         </div>

//         {/* Navbar Links */}
//         <div
//           className={`flex justify-center flex-grow ${
//             isMobileMenuOpen ? 'block' : 'hidden'
//           } lg:flex`}
//         >
//           <ul className='flex justify-center items-center flex-col md:flex-row font-medium gap-10'>
//             <li>
//               <ScrollLink
//                 to="hero-section"
//                 smooth={true}
//                 duration={500}
//                 className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
//               >
//                 Home
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="features-section"
//                 smooth={true}
//                 duration={500}
//                 offset={-50} // Adjust offset if needed
//                 className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
//               >
//                 Features
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="about-section"
//                 smooth={true}
//                 duration={500}
//                 offset={-50}
//                 className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
//               >
//                 About
//               </ScrollLink>
//             </li>
//             <li>
//               <ScrollLink
//                 to="contact-section"
//                 smooth={true}
//                 duration={500}
//                 offset={-50}
//                 className='hover:text-[#257c8a] transition duration-300 cursor-pointer'
//               >
//                 Contact
//               </ScrollLink>
//             </li>
//           </ul>
//         </div>

//         {/* Login and Register */}
//         <div className="flex flex-col md:flex-row items-center gap-5 mt-4 md:mt-0">
//           <div className='flex items-center gap-2 '>
//             <a
//               href="/signup"
//               className="bg-[#257c8a] text-white py-2 px-7 rounded-md hover:bg-[#2a8e9e] transition duration-300  "
//             >
//               Get Started
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
