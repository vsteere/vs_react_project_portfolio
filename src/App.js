import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "../src/pages/Home/Home"
import Portfolio from "../src/pages/Portfolio/Portfolio"
import Header from "../src/components/Header/index"
import Footer from "../src/components/Footer/index"




function App() {
  return (

    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />

      </div>


    </Router>

  );
}

export default App;
