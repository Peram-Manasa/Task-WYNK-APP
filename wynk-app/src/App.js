import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Header from './Components/Header/Header';

import LandingPage from '.././src/Pages/LandingPage';
import './App.css';
import { ThemeContextProvider } from './Usetheme/ThemeContextProvider';
import {Them} from '../src/Usetheme/Theme'
function App() {
  

  return (
   
   <ThemeContextProvider>
    <div className="App">
    <Them>
   < BrowserRouter>
  <Header/>

  <Routes>
  <Route path='/' element={<LandingPage/>}/>
    <Route path='/LandingPage' element={<LandingPage/>}/>
    </Routes> 
    </BrowserRouter>
    </Them>
    </div>
    </ThemeContextProvider>
   
 )
 }

 export default App;




 