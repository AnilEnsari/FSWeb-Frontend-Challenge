import React from "react";

export default function Header() {
  return (
    <header
      className="overflow-hidden bg-white flex flex-col justify-between pt-8 gap-[139px] w-full"
      id="KinciAlternatifRoot"
    >
      <div className="flex flex-col gap-3 ml-32 mr-24">
        <div className="self-end flex flex-row gap-2 items-center mb-5 mr-24">
          <div className="bg-[#4731d3] self-start flex flex-row justify-end w-12 shrink-0 h-6 items-center px-1 rounded-[100px]">
            <img
              src="https://file.rendit.io/n/wSQWc6XxTNwbqJawGjub.svg"
              className="w-4 shrink-0"
              id="Ellipse1"
              alt="Ellipse1"
            />
            <img
              src="https://file.rendit.io/n/GZZuQ1oLXBCaslP4IFPo.svg"
              className="w-px shrink-0"
              id="Ellipse2"
              alt="Ellipse2"
            />
          </div>
          <div className="text-sm font-['Inter'] font-bold tracking-[1.5] text-[#777777] mr-1">
            DARK MODE
          </div>
          <div className="text-sm font-['Inter'] font-bold tracking-[1.5] text-[#777777] mr-4">
            |
          </div>
          <div
            className="text-sm font-['Inter'] font-bold tracking-[1.5] text-[#4731d3]"
            id="TRKEYEGE1"
          >
            TÜRKÇE
            <div className="text-[#777777] contents" id="TRKEYEGE">
              ’YE GEÇ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
