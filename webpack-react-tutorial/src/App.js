
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";

class App extends Component {
    render() {
      return (
        <div className="App">
            <h1> Navigation Component</h1> 
     <Navigation>
      </Navigation>    
    </div>
      )
    }
  }

  export default App;