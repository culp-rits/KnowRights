import { useState } from "react";

function Choice(){

    const [curr, setCurr] = useState(0)
    
    setCurr((curr) => (curr === 0 ? 1 : 0))

    const handleClick=(e)=>{
        const chkAns = (curr===1)?2:3
        e.preventDefault();
        props.setState(chkAns);
    }

    return(

        <div className="flex justify-evenly mx-5">
                {/* <div className=" flex items-center w-[178px] h-[271px]">
                    <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Hint:</p>
                    <p className="m-0">Pay attention to their expected salary and age.</p>
                    </span>
                </div> */}
            <p className="text-left text-5xl text-white font-russo-one self-center">Hint: <br/>Pay attention to their expected salary and age.</p>               
            
            {/* <div className="w-1/3"> */}

            
            <div className="overflow-hidden w-2/3 mx-10">
          <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                <img
                    src="failure_resume.png"
                    alt="image 1"
                    className="w-5/6 mr-32"
                />
                <img
                    src="success_resume.png"
                    alt="image 2"
                    className="w-5/6"
                />
          </div>  
          </div>
            
            <div className="flex flex-col justify-around">
                <button onClick={handleClick} className="align-start bg-transparent border-none hover:cursor-pointer"><img className="w-2/3" src="arrowright.svg"/></button>
                <button  className="mx-4 rounded-31xl bg-skyblue text-darkblue font-russo-one hover:cursor-pointer active:bg-white">Next</button>
            </div>
        </div>
        
    )
}
export default Choice;