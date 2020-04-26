import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './js/pages/Home'
import Blog from './js/MentalHealth/Blog'
import Productivity from './js/pages/Productivity'


class App extends Component {
    render() {
      return (
        <div className="App">
        <Router>
         <Switch>
            <Route  path="/" exact component={() => <HomePage />}/>
            {/* <Route  path="/about" exact component={() => <Blog />}/> */}
            <Route  path="/mental" exact component={() => <Blog />}/>
            <Route  path="/productivity" exact component={() => <Productivity />}/>
            </Switch>
        </Router>          
        </div>
      )
    }
}

export default App;
