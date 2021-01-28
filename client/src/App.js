import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CheckIn from "./components/pages/CheckIn";
import CheckOut from "./components/pages/CheckOut";
import Management from "./components/pages/Management";
import Navbar from "./components/Navbar"
import NavTabs from "./components/Navtabs";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
          <Route exact path="/" component={CheckIn} />
          <Route exact path="/checkIn" component={CheckIn} />
          <Route exact path="/checkOut" component={CheckOut} />
          <Route exact path="/management" component={Management} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
