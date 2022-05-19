import React from "react";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" flex justify-between w-full h-30 bg-black sticky top-[100vh] py-6 px-8 mt-4 text-slate-300">
      <p>Copyright &copy; 2022 Felix Odenhall</p>
      <Link to="/login">
        <RiAdminLine className="text-white text-xl" />
      </Link>
    </footer>
  );
};

export default Footer;
