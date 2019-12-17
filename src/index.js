import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="Header">
      <h1>Richa Shah</h1>
      email: richashahmk@gmail.com
      <br />
      linkedIn: richashah12
      <br />
      mobile: 07772954104
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
