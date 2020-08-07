import React from 'react';
import './styling/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        {/* React Router */}
        <Switch>
            <Route path="/checkout">
              <h1>Checkout</h1>
            </Route>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/">
              <Header />
              <h1>This is an Amazon Clone built with React JS!!!!</h1>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
