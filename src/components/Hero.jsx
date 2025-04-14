import React from "react";

const Hero = () => {
  return (
    <main className="max-w-[1320px] w-full mx-auto px-5">
      <section className="mt-[48px]">
        <p className="text-center text-white font-inter text-base sm:text-2xl md:text-[28px] font-normal leading-[120%]">
          Pool Ur Moneys, Catch Da Red Dot, and Win Unlimited CheeƧburgerz!
        </p>
        <h1 className="pt-8 lg:text-[73px] md:text-[56px] sm:text-5xl text-[32px] text-[#EB879C] font-luckiestguy text-center max-w-[1100px] w-full mx-auto">
          Hoomin...Catch the Red Dot, Win CheeSburgerz
        </h1>
      </section>
      {/* hero section cards */}
      <section className="flex max-md:flex-wrap max-md:justify-center items-center justify-between gap-8 mt-[43px]">
        {/* first card */}
        <article className="max-w-[352px] w-full">
          <img
            className="lg:mt-[-50%] mt-[-30%] ml-[-20%] lg:h-[350px] h-[220px]"
            src="/images/red-dote-chase.png"
            alt="red-dote-image"
          />
          <p className="text-white font-luckiestguy lg:text-2xl text-lg font-normal leading-[120%] max-w-[332px] w-full pt-8 max-md:text-center">
            <span className="text-[#EB879C]">Be Part</span> of the Red Dot Chase
          </p>
          <p className="text-white font-barlow text-sm lg:text-lg font-thin leading-[150%] pt-2 max-md:text-center">
            Purrticipate now and we’ll catch da red dot and unlock cheezburgerz
            for all!
          </p>
        </article>
        {/* second card */}
        <article className="max-w-[355px] w-full">
          <img
            className="mx-auto lg:h-[200px] h-[170px]"
            src="/images/winbig.png"
            alt="red-dote-image"
          />
          <p className="text-white font-luckiestguy text-lg lg:text-2xl font-normal leading-[120%] w-full pt-5 max-md:text-center">
            Catch the Red Dot, <span className="text-[#EB879C]">Win Big</span>
          </p>
          <p className="text-white font-barlow text-sm lg:text-lg font-thin leading-[150%] pt-2 max-md:text-center">
            Every week we will use the pool to catch da red dot. When the timer
            hits zero, the red dot is caught and we get the jackpot
          </p>
        </article>
        {/* third card */}
        <article className="max-w-[352px] w-full">
          <img
            className="md:ml-[-30%] ml-[-10%] pb-3 lg:h-[175px] h-[140px]"
            src="/images/red-dote-machine.png"
            alt="red-dote-image"
          />
          <p className="text-white font-luckiestguy text-lg lg:text-2xl font-normal leading-[120%] max-w-[332px] w-full pt-3 max-md:text-center">
            <span className="text-[#EB879C]">Fund</span> the Red Dot Machine
          </p>
          <p className="text-white font-barlow text-sm lg:text-lg font-thin leading-[150%] pt-2 max-md:text-center">
            Purrticipate now and we’ll catch da red dot and unlock cheezburgerz
            for all!
          </p>
        </article>
      </section>
    </main>
  );
};

export default Hero;
