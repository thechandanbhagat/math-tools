import React, { CSSProperties } from "react";
import { addStyles } from "react-mathquill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Equations from "../equation-editor/Equation";
import Derivative from "./Derivative";
import Home from "./Home";

addStyles();

const cardStyle: CSSProperties = {
  marginLeft: "2%",
  marginRight: "2%",
};

function App() {
  return (
    <div className="content-wrapper">
      {/* <!-- Content Header (Page header) --> */}
      <div className="content-header"></div>
      {/* <!-- /.content-header --> */}
      <div className="container-fluid" id="main">
        <div style={cardStyle}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fraction" element={<Equations />} />
              <Route path="/derivative" element={<Derivative />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
