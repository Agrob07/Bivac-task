import React from "react";
import { Fragment } from "react";
import { BsCloudSun } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", to: "/", current: false },

  { name: "Contacts", to: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    navigation.forEach((elem) => (elem.current = false));
  }

  function setCurrent(name) {
    navigation.forEach((item) => {
      item.name === name ? (item.current = true) : (item.current = false);
    });
  }

  return (
    <>
      <div className="">
        <Disclosure
          as="nav"
          className="bg-gradient-to-l from-cyan-500 to-blue-500 py-3"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10">
                  <div className="flex items-center">
                    <Link className="flex-shrink-0" to={"/"}>
                      <BsCloudSun className=" text-white text-5xl" />
                    </Link>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-cyan-800 text-white"
                                : "text-gray-300 hover:bg-cyan-700 hover:text-white",
                              "px-3 py-2 rounded-md text-lg font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                            onClick={() => setCurrent(item.name)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="-mr-2 flex md:hidden">
                   
                      <Disclosure.Button className="bg-cyan-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800 text-white"
                          : "text-gray-300 hover:bg-cyan-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
