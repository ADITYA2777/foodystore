import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Explore</h2>
          <ul>
            <li className="mb-2">
              <a href="/about">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/">Blog</a>
            </li>
            <li className="mb-2">
              <a href="/">Careers</a>
            </li>
            <li className="mb-2">
              <a href="/grocery">Press</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="mb-2">123 Street, City</p>
          <p className="mb-2">support@example.com</p>
          <p className="mb-2">123-456-7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Legal</h2>
          <ul>
            <li className="mb-2">
              <a href="/">Terms of Service</a>
            </li>
            <li className="mb-2">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex  font-bold  md:text-3xl justify-center gap-5 items-center  md:flex-col ">
            <a href="linkedIn" className="mb-4">
              <FaLinkedin />
            </a>
            <a href="Twitter" className="mb-4">
              <FaXTwitter />
            </a>
            <a href="instagram" className="mb-4">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {currentYear} Your Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
