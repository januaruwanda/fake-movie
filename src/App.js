import React, { Component } from "react";
import { Provider } from 'react-redux';
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Landing from './components/home/Landing';

import store from './store';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar />
          <Landing />
          <Route />
          <Route />
          <Footer />
        </Provider>        
      </Router>
    );
  }
}

export default App;
