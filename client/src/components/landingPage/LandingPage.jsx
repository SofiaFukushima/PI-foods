import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css"

export default function LandingPage(){
    return(
        <div className="landing">
            <div className="titleLanding">
            <h1 className="only">
                Only
            </h1>
            <h2 className="only2">
                Tasty 
            </h2>
            </div>
            <div className="but">
            <Link to='/home'>
                <button className="button">
                    Home
                </button>
            </Link>
            </div>
        </div>
    )
}