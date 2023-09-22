import Hint from "./Hint";

const Game1 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] [background:linear-gradient(#3a0ca3,_#3a0ca3),_#2d2d39] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[1024px] text-left text-13xl text-white font-russo-one">
      <div className="absolute top-[39px] left-[2px] rounded-11xl shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1438px] h-[125px] overflow-hidden hidden flex-row py-2.5 px-[135px] box-border items-center justify-between min-w-[600px]">
        <div />
      </div>
      <div className="absolute top-[26px] left-[594px] w-[253px] h-[66px] text-beige">
        <div className="absolute top-[0px] left-[57px] leading-[66px]">
          KnowRights
        </div>
        <img
          className="absolute top-[5px] left-[0px] w-[57px] h-14"
          alt=""
          src="/vector1.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_-_317px)] left-[calc(50%_-_503px)] w-[1007px] h-[687px] hidden flex-col p-[6.6666669845581055px] box-border items-center justify-center mix-blend-overlay min-w-[573.3333740234375px]">
        <div className="self-stretch relative rounded-[33.33px] bg-lightsteelblue shadow-[0px_2.6666667461395264px_2.67px_rgba(0,_0,_0,_0.25)_inset] h-[526px] mix-blend-difference min-w-[573.3333740234375px]" />
      </div>
      <Hint taskONEPosition="absolute" taskONETop="428px" taskONELeft="153px" />
      <div className="absolute h-[19.14%] w-[42.78%] top-[8.98%] left-[29.44%] leading-[100px] text-deeppink text-center flex items-center justify-center">
        Choose your Assistant
      </div>
      <div className="absolute top-[397px] left-[147px] leading-[33px] flex items-center w-[178px] h-[271px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Hint:</p>
          <p className="m-0">Pay attention to their expected salary and age.</p>
        </span>
      </div>
      <img
        className="absolute top-[292px] right-[102px] w-[491px] h-[501px] overflow-hidden"
        alt=""
        src="/arrow-right-fill0-wght400-grad0-opsz24-1.svg"
      />
      <img
        className="absolute top-[267px] left-[599px] w-[390px] h-[551px] object-cover"
        alt=""
        src="/white-simple-student-cv-resume-1-1@2x.png"
      />
      <img
        className="absolute top-[199px] left-[461px] w-[507px] h-[697px] object-cover"
        alt=""
        src="/white-simple-student-cv-resume-1@2x.png"
      />
      <div className="absolute right-[101px] bottom-[68px] rounded-81xl bg-deeppink shadow-[5px_5px_25px_#fff] w-[231px] h-[90px] text-center text-17xl">
        <div className="absolute h-full w-full top-[0%] left-[0%] leading-[33px] flex items-center justify-center">
          Confirm
        </div>
      </div>
    </div>
  );
};

export default Game1;
