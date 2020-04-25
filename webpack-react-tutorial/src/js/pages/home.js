import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HomeMain from "../components/HomeMain";

const Home = () => {
	return (
        <React.Fragment>
            <Navigation/>
            <HomeMain/>
            <Footer/>
        </React.Fragment>
	)
}

export default Home