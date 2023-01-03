
import React from "react";
import Six from "../../Components/About two/Six";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Slideshow from "../../Components/Slider/Slider";
import Songs from "../../Components/Songs/Songs";
import Songsone from "../../Components/Songs/Songsone";
import Songsthree from "../../Components/Songs/Songsthree";
import SongsTwo from "../../Components/Songs/SongsTwo";
import Five from "../../Five/Five";

function LandingPage() {
  return (
    <>
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
   
    </>
  );
}

export default LandingPage;
