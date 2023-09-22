import Navbar from "../components/Navbar";
import QueryBot from "../components/QueryBot";
import Forum from "../components/Forum";
import About from "../components/About";
import Game from "./Game";
import {Routes,Route} from 'react-router-dom';
function Homepage(){
    return(
        <div className="min-h-screen max-h-full [background:linear-gradient(180deg,_#f72585,_#7209b7),_#2d2d39] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <Navbar/>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/forum' element={<Forum/>}/>
                <Route path='/bot' element={<QueryBot/>}/>
                <Route path="/game" element={<Game/>}/>
            </Routes>
        </div>
    )
};

export default Homepage;