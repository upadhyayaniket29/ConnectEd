import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import {
  HomeIcon,
  UserGroupIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "./components/Hero/Hero",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Services",
    path: "/Services",
    icon: <BriefcaseIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "About Us",
    path: "/AboutUs",
    icon: <InformationCircleIcon className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Our Team",
    path: "/Team",
    icon: <UserGroupIcon className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/Footer",
    icon: <PhoneIcon className="h-5 w-5" />,
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-screen-xl mx-auto px-4 py-10 flex justify-between items-center"

      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">ConnectEd</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-flex items-center gap-1 text-base font-medium hover:text-yellow-500 transition-all"
                >
                  {menu.icon}
                  <span>{menu.title}</span>
                </a>
              </li>
            ))}
            <button className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold transition">
              Sign In
            </button>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
