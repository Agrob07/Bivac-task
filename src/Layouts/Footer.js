import React from "react";
import { Link } from "react-router-dom";
import { BsCloudSun } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-2  sm:p-5 bg-gradient-to-r from-cyan-500 to-blue-500 py-3">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 ">
          <Link to="/" >
            <BsCloudSun className="text-8xl text-white" />
          </Link>
         
        </div>
        <p className=" self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            © 2022 Weather Forecast. All Rights Reserved.
          </p>

        <div className=" mt-3 grid grid-cols-2 gap-7 sm:gap-7 sm:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Home
            </h2>
            <ul className="text-gray-600 dark:text-gray-800">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contacts
            </h2>
            <ul className="text-gray-600 dark:text-gray-800">
              <li className="mb-4">
                <Link to="/contact" className="hover:underline ">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
