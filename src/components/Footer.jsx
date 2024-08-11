import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <ul className="flex space-x-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/chhama-sharma-a61927254"
                    target="_blank"
                  >
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/Chhama_Sharma" target="_blank">
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/sharmachhama18"
                    target="_blank"
                  >
                    <FaSquareInstagram className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="mailto:sharmachhama18@gmail.com" target="_blank">
                    <IoIosMail className="text-2xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              {/* <p className="text-sm">Thank you for your visit ❤️</p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
