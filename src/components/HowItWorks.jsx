import React from "react";
import { HowItWorksMapData } from "./common/Helper";

const HowItWorks = () => {
  return (
    <div className="bg-[#191919] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="max-w-[1320px] w-full mx-auto px-5 py-12 sm:pt-[78px] pb-[70px]">
        <h3 className="text-[#EB879C] font-luckiestguy text-[26px] lg:text-4xl xl:text-5xl font-normal leading-[120%] tracking-[1px]">
          Here’s how it works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-12 mt-[52px]">
          {HowItWorksMapData.map((item, index) => (
            <div key={index} className="max-w-[522px] w-full">
              <img
                className="lg:w-[200px] lg:h-[200px] w-[150px] rounded-full"
                src={item.img}
                alt="join-the-pool"
              />
              <h6 className="mt-5 text-white font-comicneue font-bold leading-[120%] text-2xl md:text-[28px]">
                {item.heading}
              </h6>
              <p className="pt-4 text-[rgba(255,255,255,1)] font-thin font-barlow text-base md:text-lg">
                {item.discription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
