import React from "react";
import {RiErrorWarningLine} from "react-icons/ri"
const Modal = ({ open, setOpen }) => {
  return (
    
      <div className="">
        {open && (
          <div
            className="flex justify-center items-center  transition opacity-95 duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                <div className="w-full text-5xl flex justify-center text-red-400 mb-4">
               <RiErrorWarningLine />
                </div>
                <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
                Wrong coordinates range
                </h1>
                <p className="mb-5 text-sm text-gray-600 dark:text-gray-400 text-center font-normal">
                  Latitude should be in the range -90 and +90
                  <br />
                  Longitude should be in the range -180 and +180 .
                </p>
                <div className="flex items-center justify-center w-full">
               
                  <button
                    className="focus:outline-none bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-3 text-sm leading-6 text-white p-4 px-8 text-lg my-3 mt-10"
                    onClick={() => setOpen(!open)}
                  >
                   Got it
                  </button>
                </div>
                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
   
  );
};
export default Modal;
