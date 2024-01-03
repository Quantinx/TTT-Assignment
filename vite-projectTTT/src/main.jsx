import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./App.jsx";
import Game from "./game.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
