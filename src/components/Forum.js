import { useState } from "react"

function Forum(){

    const [inputText,setInputText]=useState("")

    const [msgs,setMsgs] = useState([
        {text:"Today my father bet me up for not making him coffee. He was too drunk to realize what he was doing. I wish I could get out of this situation somehow."},
        {text:"As a single parent, I've watched my dad suffer a lot while trying to take care of me. Today, I made him breakfast as a thank you."},
        // {text:"I study in ABC School in Kanchipuram, my teacher always comes into the class but never teaches. If any of us dared to raise our voice against him, he resorts to beating us up. I hate going to school because of him."},
        // {text:"My mother lost her job a few months ago. We have been struggling financially so obviously I haven't paid my school fees yet. My friends and teachers keep picking on me because of how tattered my clothes are, I don't know how long I can keep going like this."},
        {text:"Both my parents are always away at work and I feel so unsafe being alone at home."},
    ])

    const addToMsgs =()=>{
        console.log(inputText)
        setMsgs((prev)=> [...prev, {text:inputText}])
        setInputText("")
    }

    return (
        <div className='font-russo-one w-4/5 mx-auto my-5 rounded-31xl [background:linear-gradient(180deg,_#d6bcfa,_#a3bffa)]'>
            <div className='flex items-center bg-white rounded-31xl justify-center'>
            <img src="/vector3.svg" className='w-8' alt="" />
                <h2 className='text-darkblue text-xl ml-2'> KnowRights Forum</h2>
            </div>

            <div className='flex flex-col items-center'>

                <div className="flex justify-evenly flex-wrap">
                    {
                        msgs.map((msg)=>(
                            <div className="max-w-xs text-xs bg-darkblue text-white p-3 rounded-md m-3">
                               { msg.text}
                            </div>
                        ))
                    }
                    
               </div>
                
                <div className='flex items-center w-2/3 bg-white rounded-11xl p-2 my-3'>
                    <input
                    type="text"
                    value={inputText}
                    onChange={evt=>{setInputText(evt.target.value)}}
                    placeholder="Enter your text here...."
                    className="font-russo-one text-slate-500 border-none focused:border-0 w-full text-2xl"
                    />
                    <button className="border-0 bg-transparent cursor-pointer" onClick={addToMsgs}>
                        <img src="/send-fill0-wght400-grad0-opsz24-1.svg" alt="" />
                    </button>
                </div>
            </div>
  
      </div>

    )
}

export default Forum;
