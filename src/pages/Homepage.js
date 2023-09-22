import Navbar from "../components/Navbar";
import QueryBot from "../components/QueryBot";
import Forum from "../components/Forum";
import About from "../components/About";
import {Routes,Route} from 'react-router-dom';
function Homepage(){
    return(
        <div className="h-screen [background:linear-gradient(180deg,_#f72585,_#7209b7),_#2d2d39] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <Navbar/>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/forum' element={<Forum/>}/>
                <Route path='/bot' element={<QueryBot/>}/>
            </Routes>
        </div>
    )
};

export default Homepage;