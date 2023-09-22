import LogoCenter from "../components/LogoCenter";
import Helpline from "../components/Helpline";

const Lvl1Success = () => {
  return (
    <div className="relative bg-darkblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px]">
      <div className="absolute top-[39px] left-[2px] rounded-11xl shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1438px] h-[125px] overflow-hidden hidden flex-row py-2.5 px-[135px] box-border items-center justify-between min-w-[600px]">
        <div />
      </div>
      <div className="absolute top-[calc(50%_-_317px)] left-[calc(50%_-_503px)] w-[1007px] h-[687px] hidden flex-col p-[6.6666669845581055px] box-border items-center justify-center mix-blend-overlay min-w-[573.3333740234375px]">
        <div className="self-stretch relative rounded-[33.33px] bg-lightsteelblue shadow-[0px_2.6666667461395264px_2.67px_rgba(0,_0,_0,_0.25)_inset] h-[526px] mix-blend-difference min-w-[573.3333740234375px]" />
      </div>
      <img
        className="absolute top-[193px] right-[86px] rounded-3xs w-[645px] h-[760px] object-cover hidden"
        alt=""
        src="/image-8@2x.png"
      />
      <LogoCenter
        dimensionCode="/vector5.svg"
        knowRightsLeft="593px"
        propAlignSelf="stretch"
        propColor="#fff"
      />
      <Helpline />
    </div>
  );
};

export default Lvl1Success;
