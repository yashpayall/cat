import React, { useState } from "react";
import { MenuIcon, TeligramIcon, XIcon } from "./common/Icon";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <header className="bg-[#DB3357]">
        <p className="text-white text-center px-5 font-inter text-xs sm:text-base font-normal leading-[120%] py-[10px]">
          Buy CatMoney today Price increases on NOVEMBER 15th! [Countdown Timer
          Here]
        </p>
      </header>
      <nav className="flex justify-between items-center gap-6 pt-[27px] max-w-[1320px] w-full mx-auto px-5">
        <a href="#">
          <img
            className="lg:w-[108px] lg:h-[125px] md:w-[75px] md:h-[82px] w-[65px] h-[72px]"
            src="/images/navbarlogo.png"
            alt="navbar-image"
          />
        </a>

        {/* Desktop links */}
        <div className="flex gap-8 items-center max-w-[570px] w-full max-lg:hidden">
          <a
            className="text-white font-inter text-base font-normal leading-normal hover:opacity-80 duration-300 ease-in-out"
            href="#">
            WHITEPAPER
          </a>
          <a
            className="text-white font-inter text-base font-normal leading-normal hover:opacity-80 duration-300 ease-in-out whitespace-nowrap"
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
              className=" w-10 h-10 bg-[#BC2445] rounded flex items-center justify-center hover:scale-110 duration-300">
              <TeligramIcon />
            </a>
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden hover:scale-105 duration-300 ease-in-out"
          onClick={() => setActive(!active)}>
          <MenuIcon />
        </button>

        {/* Sidebar */}
        <div
          className={`absolute top-0 w-full duration-300 ease-in-out ${
            active ? "left-0" : "left-[-110%]"
          }`}>
          <Sidebar active={active} setActive={setActive} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
