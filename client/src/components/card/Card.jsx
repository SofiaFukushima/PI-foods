import { React } from "react";

export default function Card({name, image, diets, score}){

    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Not found" width="200px" height="200px" />
            {
                diets && diets.map(diet => {
                    return(
                        <h6 key={diet}>{diet}</h6>
                    )
                })
            }
            <h6>{score}</h6>
        </div>
    )
}