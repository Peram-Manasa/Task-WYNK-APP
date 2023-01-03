import React,{useState} from 'react'
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {  BsFillBrightnessHighFill} from "react-icons/bs";
import './Header.css'
import { Link } from 'react-router-dom';
import { CgMenuCheese } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
    <div className='Header'>
    <div className='Header-right'>
      <div  className='image'>
     <img className="imageone" src="Wynk2.jpg" alt="image"/><h5 className="W">WYNK</h5><h5 className="P">MUSIC</h5>
      </div>
      <div className='right'>
        <input className="search" type="search" placeholder='search'/>
      <BsSearch className='icon'/>
      </div>
      </div>
    <div className='Header-left'>
      <ul>
        <Link to='/LandingPage'><li>LandingPage</li></Link>
        <Link to='/Podcasts'><li>Podcasts</li></Link>
        <Link to='/Download'><li>DownloadApp</li></Link>
      </ul>
    </div>
    <div className='logo1'><BsFillBrightnessHighFill/></div>
      <div className='logo'onMouseOver={ handleOpen} ><CgProfile />
      {open ? <ul className="profilemenu"><li>Mob-8340947374</li><hr/><li>Manage Subscription</li><hr/><li>Sign out</li><hr/></ul>:null}

      </div>
      </div>
    </>
  )
}
export default Header
