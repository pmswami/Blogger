
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Create from "./Create"
import React from "react"

function App() {
  // const title="Welcome to the New Blog"
  // const likes=50
  // const person = {
  //   name: "Yoshi", 
  //   age: 30
  // }
  // const link = "http://www.google.com/"

  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* <Navbar></Navbar> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>   
            </Route>
            <Route path="/create">
              <Create/>   
            </Route>
          </Switch>
          {/* <h1>{title}</h1> */}
          {/* <p>Liked {likes} times</p>
          {/* <p>{person}</p> */}
          {/* <p>{10}</p>
          <p>{"Hello Ninja"}</p>
          <p>{[1,2,3]}</p>
          <p>{Math.random()*10}</p>
          <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
