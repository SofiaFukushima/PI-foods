import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <div>
            <div>
                <Link to="/recipe">Create recipe</Link>
            </div>
        </div>
    )
}