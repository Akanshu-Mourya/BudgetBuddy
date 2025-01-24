import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0d3b42] text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About BudgetBuddy</h3>
            <p className="text-sm">
              BudgetBuddy helps you manage your finances effectively with
              features like expense tracking, savings goals, and financial
              insights. Stay in control of your budget effortlessly!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2 hover:underline">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="mb-2 hover:underline">
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  Features
                </ScrollLink>
              </li>
              <li className="mb-2 hover:underline">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li className="mb-2 hover:underline">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              <strong>Email:</strong> support@budgetbuddy.com
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> +91 9090909090
            </p>
            <p className="text-sm">
              <strong>Address:</strong> India
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-white/50 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} BudgetBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
