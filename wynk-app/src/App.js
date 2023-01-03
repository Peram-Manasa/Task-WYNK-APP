import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Six from './Components/About two/Six';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Slideshow from './Components/Slider/Slider';
import Songs from './Components/Songs/Songs';
import Songsone from './Components/Songs/Songsone';
import Songsthree from './Components/Songs/Songsthree';
import SongsTwo from './Components/Songs/SongsTwo';
import Five from './Five/Five';
import LandingPage from '.././src/Pages/LandingPage';




function App() {

  return (
    
   
    <div className="App">
      
   < BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/' element={<LandingPage/>}/>
    <Route path='/LandingPage' element={<LandingPage/>}/>
    </Routes> 
    {/* <Slideshow/>
      <Songs/>
      <Songsone/>
      <Songsone/>
      <SongsTwo/>
      <SongsTwo/>
      <Songsthree/>
      <About/>
      <Five/>
      <Six/>
      <Footer/> */}
    </BrowserRouter>
    </div>
    
  );
}

export default App
