import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { useSidebarContext } from "../context/SidebarContext";
import { signIn, signOut, useSession } from "next-auth/react";

import { Transition } from "@headlessui/react";

const Header: FC<Record<string, never>> = function () {
  const { data: session, status } = useSession();

  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
    useSidebarContext();

  return (
    <header className="sticky top-0 z-20 border-b-2">
      <Navbar fluid>
        {isPageWithSidebar && (
          <button
            aria-controls="sidebar"
            aria-expanded="true"
            className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
            onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
          >
            {isOpenOnSmallScreens ? (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        )}
        <Navbar.Brand href="/">
          <span className="text-gray-800 dark:text-white self-center whitespace-nowrap px-3 text-xl font-semibold">
            FIREway
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* <Navbar.Toggle /> */}
          <DarkThemeToggle />
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log out
            </button>
          ) : (
            <>
              <Link href="login">
                <a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Log in
                </a>
              </Link>
              <Link href="register">
                <a className="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-800">
                  Get started
                </a>
              </Link>
            </>
          )}
        </div>
        {/* <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Services</Navbar.Link>
          <Navbar.Link href="/">Pricing</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </header>
    // <>
    //   <header id="header">
    //     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    //       <div className="flex justify-between items-center mx-auto max-w-screen-xl">
    //         <div className="flex">
    //           {isPageWithSidebar && (
    //             <button
    //               aria-controls="sidebar"
    //               aria-expanded="true"
    //               className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
    //               onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
    //             >
    //               {isOpenOnSmallScreens ? (
    //                 <svg
    //                   className="h-6 w-6"
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                     clipRule="evenodd"
    //                   ></path>
    //                 </svg>
    //               ) : (
    //                 <svg
    //                   className="h-6 w-6"
    //                   fill="currentColor"
    //                   viewBox="0 0 20 20"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     fillRule="evenodd"
    //                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //                     clipRule="evenodd"
    //                   ></path>
    //                 </svg>
    //               )}
    //             </button>
    //           )}
    //           <a href="https://flowbite.com" className="flex items-center">
    //             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //               FIREway
    //             </span>
    //           </a>
    //         </div>
    //         {/* BUTTONS  */}
    //         <div className="flex items-center lg:order-2">
    //           {/* MENU HAMBURGER BUTTON */}
    //           <button
    //             onClick={() => setIsOpen(!isOpen)}
    //             data-collapse-toggle="mobile-menu-2"
    //             type="button"
    //             className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //             aria-controls="mobile-menu-2"
    //             aria-expanded="false"
    //           >
    //             <span className="sr-only">Open main menu</span>
    //             <svg
    //               className="w-6 h-6"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //             <svg
    //               className="hidden w-6 h-6"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //           </button>
    //           {session ? (
    //             <button
    //               onClick={() => signOut()}
    //               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    //             >
    //               Log out
    //             </button>
    //           ) : (
    //             <>
    //               <Link href="login">
    //                 <a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
    //                   Log in
    //                 </a>
    //               </Link>
    //               <Link href="register">
    //                 <a className="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-800">
    //                   Get started
    //                 </a>
    //               </Link>
    //             </>
    //           )}
    //           <DarkThemeToggle />
    //         </div>

    //         {/* MENU ITEMS */}
    //         <div
    //           className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
    //           id="mobile-menu-2"
    //         >
    //           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-600 lg:p-0 dark:text-white"
    //                 aria-current="page"
    //               >
    //                 Home
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Company
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Marketplace
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Features
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#pricing"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Pricing
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Contact
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <Transition
    //         show={isOpen}
    //         enter="transition ease-out duration-100 transform"
    //         enterFrom="opacity-0 scale-95"
    //         enterTo="opacity-100 scale-100"
    //         leave="transition ease-in duration-75 transform"
    //         leaveFrom="opacity-100 scale-100"
    //         leaveTo="opacity-0 scale-95"
    //       >
    //         <div className="space-y-1">
    //           <a
    //             href="#"
    //             className="hover:bg-gray-700 text-white block px-3 py-2 mt-3 rounded-md text-base font-medium"
    //           >
    //             Dashboard
    //           </a>

    //           <a
    //             href="#"
    //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //           >
    //             Team
    //           </a>

    //           <a
    //             href="#"
    //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //           >
    //             Projects
    //           </a>

    //           <a
    //             href="#"
    //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //           >
    //             Calendar
    //           </a>

    //           <a
    //             href="#"
    //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //           >
    //             Reports
    //           </a>
    //         </div>
    //       </Transition>
    //     </nav>
    //   </header>
    // </>
  );
};

export default Header;
