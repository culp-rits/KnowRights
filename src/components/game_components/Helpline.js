function Helpline(props){

    const handleClick=(e)=>{
        e.preventDefault();
        props.setState(0);
    }

    return(
        <div className="flex">
        <div>
            <p className="text-darkblue text-left font-russo-one text-[80px]">if you witnesss or experience child labour...</p>
            <p className="text-white text-left font-russo-one text-[80px]">Call CHILDLINE: 1098</p>
        </div>
        <div className="self-center">
        <button onClick={handleClick} className="grow my-20 mx-10 rounded-31xl bg-skyblue text-darkblue font-russo-one text-[30px] active:bg-white">Next</button>
        </div>
            
        </div>
    )

}

export default Helpline