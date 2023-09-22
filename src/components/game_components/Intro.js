function Intro(props){
    const handleClick=()=>{
        props.setState(1);
    }
    return(
        <div className="flex flex-row px-[5%] pb-[5%] min-h-[70vh]">
            <div className="flex flex-col w-[50%]">
                <div className="flex flex-row">
                    <p className="w-[50%] my-10 text-left text-77xl text-darkblue font-russo-one">level ONE</p>
                    <img onClick={handleClick} className=" w-[50%] mx-20 rounded-full hover:bg-white hover:bg-opacity-25 active:bg-blue-400 active:bg-opacity-75 " src="arrow-right-fill0-wght400-grad0-opsz24-1.svg" alt="" />
                </div>
                <p className="my-1 text-left text-5xl text-white font-russo-one">You decided to build games.</p>
                <p className="my-1 text-left text-5xl text-white font-russo-one">You are almost done hiring your employees.</p>
                <p className="mt-8 text-left text-5xl text-white font-russo-one">One more left,</p>
                <p className="mt-text-left text-5xl text-white font-russo-one">Choose wisely</p>
            </div>
            <div className="grow flex flex-col w-[50%]">
                <img className="px-20 h-[80vh] " src="image-11@2x.png" alt="" />
            </div>
        </div>
    )
}

export default Intro;