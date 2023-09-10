import "./description.css";

function Description() {
  return (
    <div className="mainDescription">
      <div className="flex w-1/4 flex-row gap-2  items-center" id="IsimRoot">
        <div
          className="border-solid border-[#3730a3] bg-[#4338ca] w-1/2 h-px border-t border-b-0 border-x-0"
          id="Line"
        />
        <div className="text-xl font-['Inter'] font-medium leading-[28px] text-[#4338ca] self-start">
          Anıl Ensari
        </div>
      </div>
    </div>
  );
}

export default Description;
