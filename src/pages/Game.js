import Intro from "../components/game_components/Intro";
import Choice from "../components/game_components/Choice";
import Failure from "../components/game_components/Failure";
import { useState } from "react";
function Game(){
    const [state,setState]=useState(0);
    return (
        <div>
            {state===0&&<Intro setState={setState}/>}
            {state===1&&<Choice setState={setState}/>}
            {state===3&&<Failure setState={setState}/>}
        </div>
    )
}

export default Game;