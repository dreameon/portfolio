import React from "react";
import Main from "./Main.jsx";
import { NavLink } from "react-router-dom";
import "./App.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/work/snuggle">Snuggle</NavLink>
        </li>
        <li>
          <NavLink to="/work/apothecare">Apothecare</NavLink>
        </li>
        <li>
          <NavLink to="/work/myanimelist">MyAnimeList</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <footer>Your copyright message</footer>
    </div>
  );
}

export default App;
