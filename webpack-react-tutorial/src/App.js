import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './js/pages/Home'
import Productivity from './js/pages/Productivity'
import About from './js/pages/About'
import MentalHealth from './js/pages/MentalHealth/MentalHealth'
import WorkstationAssess from './js/pages/WorkstationAssess'
import VertGuide from './js/pages/VertGuide'

class App extends Component {
    render() {
      return (
        <div className="App">
        <Router>
         <Switch>
            <Route  path="/" exact component={() => <HomePage />}/>
            {/* <Route  path="/about" exact component={() => <About />}/> */}
            <Route  path="/mental" exact component={() => <MentalHealth />}/>
            <Route  path="/productivity" exact component={() => <Productivity />}/>
            <Route  path="/workstation" exact component={() => <WorkstationAssess />}/>
            <Route  path="/vertguide" exact component={() => <VertGuide />}/>
            </Switch>
        </Router>          
        </div>
      )
    }
}

export default App;
