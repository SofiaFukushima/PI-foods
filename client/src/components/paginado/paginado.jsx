import React from "react";

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
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => {
                        return(
                        <li key={number}> 
                        <a onClick={() => paginado(number)}>{number}</a>
                        </li>)
                    })
                }
            </ul>
        </nav>
    )
}