import { React } from "react";
import "./card.css"


export default function Card({name, image, diets, score, healthyScore}){

    console.log(diets)

    const di = diets && diets.map(diet => {
      return  diet
    })
    console.log(di)

    return(
        <div className="card">
            <div className="card-header">
            <img src={image} alt="Not found" width="200px" height="200px" />
            </div>
            <div className="card-body">
                <h3>{name}</h3>
            <div>
            {
                diets && diets.map(diet => {
                    if(diet.name){
                        return(
                            <span className="tag">{diet.name}</span>
                            )
                        } else if(!diet.name){
                            return(
                                <span className="tag">{diet}</span>
                                ) }
                            })
                            
                            
                        }
                        </div>
            <h6>score:{score}</h6>
            <h6>Healthy score:{healthyScore}</h6>
            </div>
        </div>
    )
}