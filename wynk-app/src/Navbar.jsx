import React from 'react';
// import {FaHome} from "react-icons/fa";
// import {FaNetworkWired} from "react-icons/fa";
// import {FaSuitcaseRolling} from "react-icons/fa";
// import { AiFillMessage } from "react-icons/ai";
// import { AiFillNotification } from "react-icons/ai";
// import {BiUserCircle} from "react-icons/bi";
// import {BsFillGrid3X3GapFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <section className="navbar" >
     <Link to="/H" className="navbar-item">My Music</Link>
     <Link to="/my network" className="navbar-item"> Podcasts</Link>
     <Link to="/Jobs" className="navbar-item">Download App</Link>
     {/* <Link to="/Messaging"> Messaging</Link> */}
    </section>
      </>
  )
}
export default Navbar