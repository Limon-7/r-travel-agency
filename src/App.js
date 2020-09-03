import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/search-page/SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
