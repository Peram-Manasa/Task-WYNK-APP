import React,{useContext} from "react";
import { ThemChanger } from "../../Usetheme/Theme";
import "./About.scss"
function About() {
  const [data,setData]=useContext(ThemChanger)
  return (
    <>
      
      <div className="About" style={{backgroundColor:data}}>
        <h1 onClick={()=>setData('green')}>About Wynk Music</h1>
        <img className="About__Q" src="quotation.jpg.png" alt="" />
        Wynk Music is a complete package that allows you to stream music online,
        set hellotunes, listen to podcasts, download MP3 music offline, and much
        more! Since music is essentially the only thing that can truly
        understand a person, we work hard to offer our audience the ideal blend
        of MP3 from your favorite albums & artists in HD Quality. We have made
        online music streaming simple, fun, and all about you! So, what’s the
        wait for, Discover and listen to millions of online songs from different
        genres, explore mind-blowing playlists, podcasts & Download MP3 Songs
        for free exclusively on Wynk Music. Keep Wynking!
      </div>
    </>
  );
}

export default About;
