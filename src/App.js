import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Checkout from './Checkout';
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {
 const [{user}, dispatch] = useStateValue();

  //code runs on based on condition-> ***useEffect***

  useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user logged in.. pusing the user to datalayer
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }
      else{
        //user logged out..setting the user to null
        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    })

    return () => {
      //Cleanup operation
      unsubscribe();
    }
  }, [])

  console.log("user is -- ", user);

  return (
    <Router>
      
      <div className="app">
      <Switch> 

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
        <Navbar />
        <Checkout />
        </Route>

        <Route path="/">
          <Navbar />
          <Home />
        </Route>

      </Switch>
     </div>
      
    </Router>
 
  );
}

export default App;
