import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


class About extends Component {
    render() {
      return (
        <React.Fragment>
            <Navigation/>
            <h1>About</h1>
            <Footer/>
        </React.Fragment>
        )
    }
}

export default About