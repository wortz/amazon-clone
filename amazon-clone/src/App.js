import React from 'react';
import './styling/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        {/* React Router */}
        <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
