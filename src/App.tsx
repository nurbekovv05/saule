import React from 'react';
import MoviesPopular from "./components/pages/MoviesPopular";
import Header from "./components/Header/Header";
import TopRated from "./components/pages/TopRated";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./components/pages/NowPlaying";
import Upcoming from "./components/pages/Upcoming";
import Footer from "./components/Footer/Footer";
import DetailPage from "./components/pages/DetailPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<MoviesPopular/>}/>
            <Route path={'/TopRated'} element={<TopRated/>}/>
            <Route path={'/Now Playing'} element={<NowPlaying/>}/>
            <Route path={'/Upcoming'} element={<Upcoming/>}/>
            <Route path={'/movie/:movieId'} element={<DetailPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
