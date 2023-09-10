import React from "react";

export default function Header() {
  //9. satırı justifyend yapınca toggle oluyor//
  return (
    <header className=" flex justify-end  pt-8 gap-[139px] w-full">
      <div className="flex  gap-3  ">
        <div className=" flex  gap-2 items-center mb-5">
          <div className="bg-[#4731d3] self-start flex flex-row  w-12 shrink-0 h-6 items-center px-1 rounded-[100px]">
            <img
              src="https://file.rendit.io/n/wSQWc6XxTNwbqJawGjub.svg"
              className="w-4 shrink-0"
              s="true"
              alt="Ellipse1"
            />
            <img
              src="https://file.rendit.io/n/GZZuQ1oLXBCaslP4IFPo.svg"
              className="w-px shrink-0"
              alt="Ellipse2"
            />
          </div>
          <div className="text-sm font-['Inter'] font-bold tracking-[1.5] text-[#777777] ">
            DARK MODE
          </div>
          <div className="text-sm font-['Inter'] font-bold tracking-[1.5] text-[#777777] ">
            |
          </div>
          <div className="text-sm font-['Inter'] font-bold tracking-[1.5] text-[#4731d3]">
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
