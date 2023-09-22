import { Link } from "react-router-dom";
function About(){
    return (
        <div>
            <div className="relative flex flex-row justify-end px-[5%] pb-[5%]">
                <Link to="/game" >
                    <img className="top-[30%] left-[10%] grow w-[10%] rounded-full absolute hover:bg-white hover:bg-opacity-25 active:bg-blue-400 active:bg-opacity-75" src="/playcircle.svg" alt="" />
                </Link>
                <img className=" h-[78vh] w-[78vw]" src="/homepageimg@2x.png" alt="" />
            </div>
        </div>
    )
}
export default About;