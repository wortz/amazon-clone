import React, { useEffect } from 'react';
import './styling/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { useStateValue } from './state/StateProvider';
import { auth } from './state/firebase'
import Payment from './pages/Payment';

function App() {
    // eslint-disable-next-line
    const [{basket},dispatch] = useStateValue();
  //Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };

  }, []);

  useEffect(() => {
    const data = localStorage.getItem('my-basket');
    if(data) {
      dispatch({
        type: "SET_BASKET",
        basket: JSON.parse(data),
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('my-basket', JSON.stringify(basket));
  }, [basket]);

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
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
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
