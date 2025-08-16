import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Snuggle from "./pages/work/Snuggle.jsx";
import Apothecare from "./pages/work/Apothecare.jsx";
import MyAnimeList from "./pages/work/MyAnimeList.jsx";

function Main() {
  return (
    <Routes>
      {/* Deciding which component to show based on the current URL.*/}
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/work/snuggle" element={<Snuggle />}></Route>
      <Route exact path="/work/apothecare" element={<Apothecare />}></Route>
      <Route exact path="/work/myanimelist" element={<MyAnimeList />}></Route>
    </Routes>
  );
}

export default Main;
