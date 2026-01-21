import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-20 pb-10 mt-10">
      <div className="grid grid-cols-4 gap-12 mb-20 text-[#1F4B43]">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-6">bd.Real</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-[#1F4B43]/20 flex items-center justify-center hover:bg-[#1F4B43] hover:text-white transition-colors cursor-pointer">
              f
            </div>
            <div className="w-10 h-10 rounded-full border border-[#1F4B43]/20 flex items-center justify-center hover:bg-[#1F4B43] hover:text-white transition-colors cursor-pointer">
              📷
            </div>
            <div className="w-10 h-10 rounded-full border border-[#1F4B43]/20 flex items-center justify-center hover:bg-[#1F4B43] hover:text-white transition-colors cursor-pointer">
              in
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-[#1F4B43]/70">
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                Listings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-[#1F4B43]/70">
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#1F4B43]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-[#1F4B43]/70">
            <li>
              101 West Broadway, Ste 300
              <br />
              San Diego, CA 92101
            </li>
            <li>+4 57494 - 4985213</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1F4B43] text-white py-6 text-center text-xs">
        <p>Copyright © 2024 bd.Real ® All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
