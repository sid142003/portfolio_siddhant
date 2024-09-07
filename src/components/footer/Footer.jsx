import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const chatonwhatsapp = () => {
    window.open("https://wa.me/918090453205", "_blank");
  };
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Connect</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
         
          <div onClick={chatonwhatsapp}>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          </div>
          
        </div>
        <div className="sm:text-[12px]">
          Made By  <span>Siddhant ❤️</span> 
          <a href="#"></a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
