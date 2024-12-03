import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4f1c34] text-[#f2d1a9] py-10 font-sans">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        {/* Social Media Column */}
        <div className="w-full md:w-[23%] mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4 text-[#e4b889]">Social Media</h4>
          <ul className="flex gap-4">
            <li><a href="#" className="text-2xl hover:text-[#a09ff2] transition-colors"><CiFacebook /></a></li>
            <li><a href="#" className="text-2xl hover:text-[#a09ff2] transition-colors"><FaXTwitter /></a></li>
            <li><a href="#" className="text-2xl hover:text-[#a09ff2] transition-colors"><FaInstagram /></a></li>
          </ul>
        </div>

        {/* Venues Column */}
        <div className="w-full md:w-[23%] mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4 text-[#e4b889]">Venues</h4>
          <ul className="space-y-2">
            {["Delhi", "Mumbai", "Pune", "Bangalore", "Durg", "Rajasthan"].map((venue) => (
              <li key={venue}>
                <a href="#" className="hover:text-[#a09ff2] transition-colors">{venue}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Suppliers Column */}
        <div className="w-full md:w-[23%] mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4 text-[#e4b889]">Suppliers</h4>
          <ul className="space-y-2">
            {["Photographers", "Decorators", "Venue Planner", "Choreographers", "Designers", "Makeup Artists"].map((supplier) => (
              <li key={supplier}>
                <a href="#" className="hover:text-[#a09ff2] transition-colors">{supplier}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="w-full md:w-[23%]">
          <h4 className="text-lg font-bold mb-4 text-[#e4b889]">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Careers", "Contact Us", "FAQ", "Privacy Policy", "Terms & Conditions"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#a09ff2] transition-colors visited:text-[#9d62c9]">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
