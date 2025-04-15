import React from "react";

const AsSeenIn = () => {
  return (
    <div className="max-w-[1320px] w-full mx-auto px-5 mt-14 md:mt-20 lg:mt-[100px]">
      <p className="text-white font-comicneue text-xl font-normal leading-[120%] text-center">
        As seen in...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-6 xl:gap-10 mt-4">
        <div className="bg-white w-full h-14 md:h-[72px]"></div>
        <div className="bg-white w-full h-14 md:h-[72px]"></div>
        <div className="bg-white w-full h-14 md:h-[72px]"></div>
        <div className="bg-white w-full h-14 md:h-[72px]"></div>
      </div>
    </div>
  );
};

export default AsSeenIn;
