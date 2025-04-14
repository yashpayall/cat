import React from "react";
import { CrossIcon, TeligramIcon, XIcon } from "./common/Icon";

const Sidebar = ({ active, setActive }) => {
  return (
    <div className="flex flex-col gap-8 items-center bg-[#EB879C] w-full h-screen p-6 relative">
      <div
        onClick={() => setActive(!active)}
        className="absolute cursor-pointer top-4 right-4 hover:rotate-90 duration-300 ease-in-out">
        <CrossIcon />
      </div>
      <a
        className="text-white font-inter text-xl font-normal leading-normal hover:opacity-80 duration-300 ease-in-out"
        href="#">
        WHITEPAPER
      </a>
      <a
        className="text-white font-inter text-xl font-normal leading-normal hover:opacity-80 duration-300 ease-in-out whitespace-nowrap"
        href="#">
        ACCOUNT LOGIN
      </a>
      <button
        type="submit"
        className="max-w-[149px] w-full rounded-lg py-4 tracking-[1px] bg-[linear-gradient(90deg,#B21F3F_0%,#DB3357_50%,#B21F3F_100%)] text-white font-luckiestguy text-lg font-normal leading-[180%] hover:scale-105 duration-300">
        get TOKENS
      </button>
      <div className="flex items-center gap-2">
        <a
          href="#"
          className="w-10 h-10 bg-[#BC2445] rounded flex items-center justify-center hover:scale-110 duration-300">
          <XIcon />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-[#BC2445] rounded flex items-center justify-center hover:scale-110 duration-300">
          <TeligramIcon />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
