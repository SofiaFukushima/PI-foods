import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div>
            <h1 background="black">
                Only Tasty 
            </h1>
            <Link to='/home'>
                <button>
                    Home
                </button>
            </Link>
        </div>
    )
}