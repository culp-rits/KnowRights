import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="flex mx-8 text-left text-13xl text-white font-russo-one ">
            <div className="flex flex-row mx-8 items-center justify-between">
                <img src="/vector.svg" alt="" />
                <p>KnowRights</p>
            </div>
            <div className="grow flex flex-row justify-end">
                <div className="flex flex-row gap-10">
                    <Link className="no-underline text-left text-13xl text-white font-russo-one" to="/"><p>About</p></Link>
                    <Link className="no-underline text-left text-13xl text-white font-russo-one"  to="/forum"><p>Forum</p></Link>
                    <Link className="no-underline text-left text-13xl text-white font-russo-one" to="/bot"><p>QueryBot</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;