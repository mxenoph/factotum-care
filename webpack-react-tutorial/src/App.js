import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import Album from "./js/components/Album";
import Header from "./js/components/Header";
import About from "./js/components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const mysections = [
  { title: "Fiat", url: "#" },
  { title: "Fiat2", url: "#" },
  { title: "Fiat3", url: "#" },
];

class App extends Component {
  render() {
    return (
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Navigation />} />
              <Route path="/about" exact component={() => <About />} />
            </Switch>
            <Footer />
          </Router>
        </div>
//      <div className="App">
//        {/* <h1> Navigation Component</h1>
//     <Navigation>
//      </Navigation>     */}
//        <Header sections={mysections} title="Hello" />
//        <Album />
//      </div>
    );
  }
}

export default App;
