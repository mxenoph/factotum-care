<<<<<<< HEAD
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import HomePage from './js/pages/home'

class App extends Component {
    render() {
      return (
        <div className="App">
          <HomePage/>   
        </div>
      )
    }
=======
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './js/pages/home'
import Blog from './js/MentalHealth/Blog'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
         <Switch>
            <Route  path="/" exact component={() => <HomePage />}/>
            {/* <Route  path="/about" exact component={() => <Blog />}/> */}
            <Route  path="/mental" exact component={() => <Blog />}/>

            </Switch>
        </Router>
      </div>
  )
>>>>>>> kioann
  }
  
}


export default App;
