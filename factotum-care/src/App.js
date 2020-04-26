import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './js/pages/home'
import Productivity from './js/pages/Productivity'
import MentalHealth from './js/pages/MentalHealth/MentalHealth'
import Surroundings from './js/pages/Surroundings/Surroundings'
import VertGuide from './js/pages/VertGuide'

class App extends Component {
    render() {
      return (
        <div className="App">
        <Router>
         <Switch>
            <Route  path="/" exact component={() => <HomePage />}/>
            <Route  path="/mental" exact component={() => <MentalHealth />}/>
            <Route  path="/productivity" exact component={() => <Productivity />}/>
            <Route  path="/workstation" exact component={() => <VertGuide />}/>
            <Route  path="/surroundings" exact component={() => <Surroundings />}/>
            </Switch>
        </Router>          
        </div>
      )
    }
}

export default App;
