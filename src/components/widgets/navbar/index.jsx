import { Link } from "react-router-dom";
import { useState } from "react";

import YellowMenuIcon from "../../icons/menu";
import Sidebar from "../sidebar";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="fixed top-0 z-10000 w-full  bg-primary-dark1   text-black  py-4 h-20 px-[%] font-mono shadow-xl  border-gray-light4">
      <div className="flex justify-between max-w-[1500px] mx-auto items-start">
        <div className="text-primary-yellow">
          <Link to="/" className="flex items-center gap-x-4">
            {" "}
          <img src="/images/company_logo_time.jpg" alt="" className="w-28" />
          </Link>
        </div>
        <div className="items-center hidden lg:flex gap-x-8">
          <Link
            to="/"
            className="hover:border-b-2 border-gray-dark3 primary-yellow active:border-b-2 active:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="#"
            className="hover:border-b-2 border-gray-dark3 active:border-b-2 active:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="#"
            className="hover:border-b-2 border-gray-dark3 active:border-b-2 active:text-yellow-300"
          >
            Service
          </Link>
          <Link
            className="hover:border-b-2 border-gray-dark3 active:border-b-2 active:text-yellow-300"
          >
            Portfolio
          </Link>
          <Link
            className="hover:border-b-2 border-gray-dark3 active:border-b-2 active:text-yellow-300"
          >
            Team
          </Link>
          <Link
            to="#"
            className="hover:border-b-2 border-gray-dark3 active:border-b-2 active:text-yellow-300 whitespace-nowrap"
          >
            Contact
          </Link>
          <div className="flex justify-end w-1/4">
            <div className="relative group">
              <div
                className="flex items-center cursor-pointer menu-overlay gap-x-2 lg:gap-x-4"
                id="mouse-lover"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
              
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button onClick={openModal}>
            <YellowMenuIcon className="text-white" />
          </button>
        </div>
      </div>
      {isModalOpen && <Sidebar onClose={closeModal} />}
    </nav>
  );
}
