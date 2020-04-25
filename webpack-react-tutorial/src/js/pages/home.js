import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "../components/Navigation";
import Fooder from "../components/Fooder";
import HomeMain from "../components/HomeMain";

const Home = () => {
	return (
        <React.Fragment>
            <Navigation/>
            <HomeMain/>
            <Fooder/>
        </React.Fragment>
	)
}

export default Home