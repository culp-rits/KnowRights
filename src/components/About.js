import { Link } from "react-router-dom";
import { useState } from "react";
function About(){
    const [state,setState]=useState(0);
    const changeState=(e) =>{
        e.preventDefault()
        setState((state+1)%2)
    }
    return (
        <div>
            <div className="relative flex flex-row justify-end px-[5%] pb-[5%]">
                
                {/* <Link to="/game" >
                    <img className="top-[30%] left-[10%] grow w-[10%] rounded-full absolute hover:bg-white hover:bg-opacity-25 active:bg-blue-400 active:bg-opacity-75" src="/playcircle.svg" alt="" />
                </Link> */}
            
                {state===0 && 
                    <div>
                        <img onClick={changeState} className="top-[30%] left-[10%] grow w-[10%] rounded-full absolute hover:bg-white hover:bg-opacity-25 active:bg-blue-400 active:bg-opacity-75" src="/arrowright.svg" alt="" />
                        <img className=" h-[78vh] w-[78vw]" src="/homepageimg@2x.png" alt="" />
                        <p className="absolute top-[30%] right-[10%] text-left text-13xl text-white font-russo-one">Hi, Raj</p>
                    </div>
                }
                {state===1 && 
                    <div>
                        <Link to="/game" >
                            <img className="top-[30%] left-[10%] grow w-[10%] rounded-full absolute hover:bg-white hover:bg-opacity-25 active:bg-blue-400 active:bg-opacity-75" src="/playcircle.svg" alt="" />
                        </Link>
                        <img className=" h-[78vh] w-[78vw]" src="/homepageimg@2x.png" alt="" />
                        <p className="absolute top-[30%] right-[10%] text-left text-13xl text-darkblue font-russo-one">Let's start your<p className="text-white">FIRST BUSINESS</p></p>
                    </div>
                }
                
            </div>
        </div>
    )
}
export default About;