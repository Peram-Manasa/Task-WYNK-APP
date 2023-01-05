
import React, { useContext } from "react";
import Six from "../../Components/About two/Six";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import { useRef, useState, useEffect } from 'react';
import Slideshow from "../../Components/Slider/Slider";
import Songs from "../../Components/Songs/Songs";
import Songsone from "../../Components/Songs/Songsone";
import Songsthree from "../../Components/Songs/Songsthree";
import SongsTwo from "../../Components/Songs/SongsTwo";
import Five from "../../Five/Five";
import Player from "../../Components/PlaySongs/Player";
import { songsdata } from "../../Components/PlaySongs/audios";
import { AppThemeContext } from "../../Usetheme/ThemeContextProvider";
function LandingPage() {

 
 
//  const App = () => {
   const [songs, setSongs] = useState(songsdata);
   const [isplaying, setisplaying] = useState(false);
   const [currentSong, setCurrentSong] = useState(songsdata[1]);
 
   const audioElem = useRef();
 
   useEffect(() => {
     if (isplaying) {
       audioElem.current.play();
     }
     else {
       audioElem.current.pause();
     }
   }, [isplaying])
 
   const onPlaying = () => {
     const duration = audioElem.current.duration;
     const ct = audioElem.current.currentTime;
 
     setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
 
   }
 
 
//    return (
//      <div className="App">
//        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
//        <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong}  />
//      </div>
//    );
//  }
 
//  export default App;

    const {darkMode}=useContext(AppThemeContext)
 

  return (
    <>
    <div style={{backgroundColor:darkMode}}>
      <Slideshow />
      <Songs />
      <Songsone />
      <Songsone />
      <SongsTwo />
      <SongsTwo/>
      <Songsthree/>
      <About/>
      <Five/>
      <Six/>
      <Footer/>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying}/>
      
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong}  />
   </div>
    </>
  );
}

export default LandingPage;
