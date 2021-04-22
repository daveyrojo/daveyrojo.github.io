import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { ModalCard } from "./components/ModalCard";

function App() {
  return (
    <Router basename="/david-eldridge">
      <NavBar />
      <Switch>
        <Route exact path="/david-eldridge/">
          <ModalCard />
          <Home />
        </Route>
        <Route exact path="/david-eldridge/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/david-eldridge/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;