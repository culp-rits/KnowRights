import LogoCenter from "../components/LogoCenter";

const Lvl1Info = () => {
  return (
    <div className="relative [background:linear-gradient(#3a0ca3,_#3a0ca3),_#2d2d39] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] text-left text-77xl text-deeppink font-russo-one">
      <div className="absolute top-[39px] left-[2px] rounded-11xl shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1438px] h-[125px] overflow-hidden hidden flex-row py-2.5 px-[135px] box-border items-center justify-between min-w-[600px]">
        <div />
      </div>
      <LogoCenter dimensionCode="/vector4.svg" />
      <div className="absolute top-[193px] left-[86px] w-[1268px] overflow-hidden flex flex-row flex-wrap items-center justify-center">
        <div className="w-[1207px] h-[760px] overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start">
          <div className="w-[573px] h-[760px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
            <div className="w-[500px] h-[760px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
              <div className="leading-[100px] flex items-center w-[280px] h-[196px] shrink-0 mb-[84px]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">level</p>
                  <p className="m-0">ONE</p>
                </span>
              </div>
              <div className="text-13xl leading-[33px] text-beige flex items-center w-[760px] h-[271px] shrink-0 mt-[489px] ml-[-234px]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    You decided to build games. You are almost done hiring your
                    employees.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">One more left,</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">Choose wisely</p>
                </span>
              </div>
            </div>
            <img
              className="relative w-[491px] h-[584px] overflow-hidden shrink-0 ml-[-418px]"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="flex-1 flex flex-row flex-wrap items-center justify-start ml-[-11px]">
            <img
              className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[760px] object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lvl1Info;
