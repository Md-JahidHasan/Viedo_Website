import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { Counter } from './features/counter/Counter';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/video/:videoId' element={<Video></Video>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
