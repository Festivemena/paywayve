import React from "react";
import { FaBeer, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Socials() {
  return (
   <div className="flex text-white justify-between text-xl w-full">
    <FaTwitter className="px-1" />
    <FaLinkedin className="px-1" />
    <FaInstagram className="px-1" />
   </div>
  );
}