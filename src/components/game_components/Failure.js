function Failure(props){
    const handleClick=(e)=>{
        e.preventDefault();
        props.setState(0);
    }
    return(
        <div className="flex flex-row px-[5%] pb-[5%] min-h-[70vh]">
            <div className="flex flex-col w-[50%]">
                <div className="flex flex-row">
                    <p className="w-[50%] my-10 text-left text-[80px] text-white font-russo-one">level ONE</p>
                    <button onClick={handleClick}className="grow my-20 mx-10 rounded-31xl bg-red-400 text-darkblue font-russo-one text-[30px] active:bg-white">Retry</button>
                </div>
                <p className="my-1 text-left text-5xl text-skyblue font-russo-one">You did not violate the Child Labour Act which prohibits employment of children less than 18 y/o  !</p>
                <p className="my-1 text-left text-77xl text-skyblue font-russo-one">FAIL!</p>
                <p className="my-0 text-left text-45xl text-skyblue font-russo-one">0 pts</p>
                <p className="my-1 text-left text-5xl text-skyblue font-russo-one">Total Points: 0</p>

            </div>
            <div className="grow flex flex-col w-[50%]">
                <img className="px-20 h-[80vh] " src="image-12@2x.png" alt="" />
            </div>
        </div>
    )
}

export default Failure;