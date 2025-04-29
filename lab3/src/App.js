import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Games from './pages/Games.js';
import Tournaments from './pages/Tournament.js';
import Profile from './pages/Profile.js';
import Footer from './components/Footer.js';

const App = function () {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "header",
      null,
      React.createElement("h1", null, "CyberArena"),
    ),
      React.createElement(
        "nav",
        null,
        React.createElement(Link, { to: "/" }, "Головна"),
        React.createElement("span", null, " "),
        React.createElement(Link, { to: "/games" }, "Ігри"),
        React.createElement("span", null, " "),
        React.createElement(Link, { to: "/tournaments" }, "Турніри"),
        React.createElement("span", null, " "),
        React.createElement(Link, { to: "/profile" }, "Мій профіль")
      ),
    
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
      React.createElement(Route, { path: "/games", element: React.createElement(Games, null) }),
      React.createElement(Route, { path: "/tournaments", element: React.createElement(Tournaments, null) }),
      React.createElement(Route, { path: "/profile", element: React.createElement(Profile, null) })
    ),
    React.createElement(Footer, null)
  );
};   
export default App;
