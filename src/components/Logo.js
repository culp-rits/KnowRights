const Logo = ({ dimensionCode }) => {
  return (
    <div className="relative w-[253px] h-[66px] text-left text-13xl text-white font-russo-one">
      <div className="absolute top-[0%] left-[22.53%] leading-[66px]">
        KnowRights
      </div>
      <img
        className="absolute h-[84.85%] w-[22.53%] top-[7.58%] right-[77.47%] bottom-[7.58%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={dimensionCode}
      />
    </div>
  );
};

export default Logo;
