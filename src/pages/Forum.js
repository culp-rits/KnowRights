import Logo from "../components/Logo";
import NavbarItems from "../components/NavbarItems";
import ForumContainer1 from "../components/ForumContainer1";

const Forum = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_#f72585,_#7209b7)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] flex flex-col pt-[26px] pb-[143px] pr-[140px] pl-[147px] box-border items-start justify-end gap-[51px]">
      <div className="w-[1153px] h-[66.5px] overflow-hidden shrink-0 flex flex-row pt-0 px-0 pb-[0.5px] box-border items-center justify-start gap-[437px]">
        <Logo dimensionCode="/vector2.svg" />
        <NavbarItems />
      </div>
      <ForumContainer1 />
    </div>
  );
};

export default Forum;
