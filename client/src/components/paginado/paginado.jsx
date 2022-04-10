import React from "react";
import "./paginado.css"

export default function Paginado({foodsPerPage, allFoods, paginado}){
    //where the numbers of pages are saved.
    const pageNumbers = []

    //give us how much pages are and push it into pageNumbers
    for(let i=1; i<=Math.ceil(allFoods/foodsPerPage); i++){
        pageNumbers.push(i)
    }

    //return a list with numbers, each of one change the page.
    return(
        <nav>
            <ul class="list">
                {
                    pageNumbers && pageNumbers.map(number => {
                        return(
                        <li key={number}> 
                        <button onClick={() => paginado(number)} class="butons">{number}</button>
                        </li>)
                    })
                }
            </ul>
        </nav>
    )
}