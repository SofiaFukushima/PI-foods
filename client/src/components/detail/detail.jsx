import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar.jsx"
import "./detail.css"

export default function Detail(props){
    
    const dispatch = useDispatch()
    
    const {id} = useParams()
    
    console.log(id)
    
    useEffect(()=> {
        dispatch(getDetail(id));
    },[id, dispatch])
    
    const myFood = useSelector((state => state.foodDetail))


    return(
        <div>
            <NavBar></NavBar>
            {
               myFood.length>0?
               <div className="detail">
                   <div className="detail-header">

                    <h1>{myFood[0].name}</h1>

                    <img src={myFood[0].image} alt="Not found"></img>

                    </div>
                    <div className="detail-body">
                    
                    <div>
                    {
                        myFood[0].diets && myFood[0].diets.map(diet => {
                            if(diet.name){
                                return(
                                    <span className="detail-tag">{diet.name}</span>
                                    )
                                } else if(!diet.name){
                                    return(
                                        <span className="detail-tag">{diet}</span>
                                        ) }
                                    }  )
                    }
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: myFood[0].summary }} />
                    <h3>Score:{myFood[0].score}</h3>
                    <h3>Healthy score:{myFood[0].healthyScore}</h3>
                    <h6>Steps:{myFood[0].steps}</h6>
                    </div>
                </div> : <p>Loading...</p> 

            }
            </div>
            )
}
