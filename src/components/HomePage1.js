const HomePage1 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#f72585,_#7209b7),_#2d2d39] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[1024px] text-left text-13xl text-white font-russo-one">
      <img
        className="absolute top-[calc(50%_-_317px)] left-[calc(50%_-_577px)] rounded-31xl w-[1153px] h-[686px] object-cover"
        alt=""
        src="/homepageimg@2x.png"
      />
      <div className="absolute top-[31.5px] right-[140px] w-[463px] h-[61px] flex flex-row items-center justify-between">
        <div className="relative">About</div>
        <div className="relative">Forum</div>
        <div className="relative">QueryBot</div>
      </div>
      <div className="absolute top-[26px] left-[147px] w-[253px] h-[66px]">
        <div className="absolute top-[0px] left-[57px] leading-[66px]">
          KnowRights
        </div>
        <img
          className="absolute top-[5px] left-[0px] w-[57px] h-14"
          alt=""
          src="/vector.svg"
        />
      </div>
      <img
        className="absolute top-[262px] left-[-102px] w-[491px] h-[501px] overflow-hidden"
        alt=""
        src="/arrowright.svg"
      />
      <div className="absolute top-[calc(50%_-_317px)] left-[calc(50%_-_503px)] w-[1007px] h-[687px] flex flex-col p-[6.6666669845581055px] box-border items-center justify-center mix-blend-overlay min-w-[573.3333740234375px]">
        <div className="self-stretch relative rounded-[33.33px] bg-lightsteelblue shadow-[0px_2.6666667461395264px_2.67px_rgba(0,_0,_0,_0.25)_inset] h-[526px] mix-blend-difference min-w-[573.3333740234375px]" />
      </div>
      <div className="absolute top-[229px] right-[254px] text-45xl leading-[66px] flex items-center w-[235px] h-[565px]">
        Hi, Raj!
      </div>
    </div>
  );
};

export default HomePage1;
