import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppFooter from "./comp/appfooter/appfooter";
import AppHeader from "./comp/appheader/appheader";
import Content from "./comp/content/content";


function App() {
  return (
    // <Router>

    <div className="wrapper">
      <AppHeader />
       <Content />
      <AppFooter />
    </div>
    // </Router>
  );
}

export default App;
