import { useMemo } from "react";

const LogoCenter = ({
  dimensionCode,
  knowRightsLeft,
  propAlignSelf,
  propColor,
}) => {
  const frameStyle = useMemo(() => {
    return {
      left: knowRightsLeft,
    };
  }, [knowRightsLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const knowRightsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[26px] left-[calc(50%_-_127px)] w-[254px] overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-beige font-russo-one"
      style={frameStyle}
    >
      <div
        className="h-[66px] flex flex-row items-center justify-start"
        style={frameDivStyle}
      >
        <img className="relative w-[57px] h-14" alt="" src={dimensionCode} />
        <div className="relative leading-[66px]" style={knowRightsStyle}>
          KnowRights
        </div>
      </div>
    </div>
  );
};

export default LogoCenter;
