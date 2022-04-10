import React from "react";
import "./navBar.css"

export default function NavBar(){

    return(
        <div class="nav">
            <nav class="nav__links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/recipe">Create recipe</a></li>
            </nav>
        </div>
    )

}