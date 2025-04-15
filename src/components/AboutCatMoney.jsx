import React from "react";
import { JackpointIcon } from "./common/Icon";

const AboutCatMoney = () => {
  return (
    <div className="max-w-[1320px] w-full mx-auto px-5 my-14 sm:my-20 lg:my-[112px] flex items-center justify-between max-md:flex-col overflow-hidden">
      <div className="max-w-[630px] w-full">
        <p className="text-[#EB879C] font-luckiestguy text-[26px] lg:text-4xl xl:text-5xl font-normal leading-[120%] tracking-[1px]">
          What is CatMoney Catch?
        </p>
        <p className="text-white font-barlow text-xl lg:text-[30px] font-normal leading-[140%] mt-4">
          Not just another meme token or game, CatMoney Catch is a revolutionary
          system designed to mix fun with real crypto earnings.
        </p>
        <p className="text-[rgba(255,255,255,1)] font-barlow text-base lg:text-lg font-normal leading-[150%] mt-5">
          It’s where the community, both cats and their hoomins, pool their
          resources—catnip, fish bones, and crypto—to fund the ultimate mission:
          building the Red Dot Catching Machine. Each week, the cats build a new
          machine to catch the elusive red dot, leading to big jackpots and
          growing rewards.
        </p>
        <p className="text-[rgba(255,255,255,1)] font-barlow text-base lg:text-lg font-normal leading-[150%] mt-4">
          Drawing inspiration from the fascinating behavior of our feline
          friends and the latest advancements in blockchain technology, CatMoney
          Catch brings a unique twist to DeFi.
        </p>
        <p className="text-white font-barlow font-bold leading-[150%] mt-4">
          The brilliance of CatMoney Catch lies in its cyclical jackpot system.{" "}
        </p>
        <p className="text-[rgba(255,255,255,1)] font-barlow text-base lg:text-lg font-normal leading-[150%] mt-4">
          <span className="font-bold">Every week,</span> participants pool their
          resources to fund the Red Dot Catching Machine.Every week,
          participants pool their resources to fund the Red Dot Catching
          Machine.
        </p>
        <p className="text-[rgba(255,255,255,1)] font-barlow text-base lg:text-lg font-normal leading-[150%] mt-4">
          When the machine is built and the red dot is caught, one or two lucky
          winners claim a majority of the jackpot, while the rest are
          distributed to token holders.
        </p>
        <p className="text-[rgba(255,255,255,1)] font-barlow text-base lg:text-lg font-normal leading-[150%] mt-4">
          The pool then resets, and the chase begins again, ensuring continuous
          engagement and opportunities to win.
        </p>
        <div className="flex gap-4 items-center mt-6">
          <div>
            <JackpointIcon />
          </div>
          <p className="text-white font-barlow font-bold lg:text-lg text-sm leading-[150%">
            And each month, a special bonus machine is constructed with an even
            bigger jackpot.
          </p>
        </div>
        <p className="text-[rgba(255,255,255,1)] font-barlow text-base lg:text-lg font-normal leading-[150%] mt-6">
          This grand monthly event offers participants the chance to win massive
          rewards.
        </p>
      </div>
      <div className="max-w-[668px] w-full">
        <img
          className="-mb-[30%] "
          src="/images/aboutcat.png"
          alt="about-cat-image"
        />
      </div>
    </div>
  );
};

export default AboutCatMoney;
