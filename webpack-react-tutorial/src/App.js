import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import Album from "./js/components/Album";
import Header from "./js/components/Header";

const mysections = [
  { title: "Fiat", url: "#" },
  { title: "Fiat2", url: "#" },
  { title: "Fiat3", url: "#" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1> Navigation Component</h1> 
     <Navigation>
<<<<<<< HEAD
     </Navigation>    
    </div>
      )
    }
=======
      </Navigation>     */}
        <Header sections={mysections} title="Hello" />
        <Album />
      </div>
    );
>>>>>>> 151a0f063bff8bbc453f9aa50fb613d29238adc0
  }
}

export default App;
