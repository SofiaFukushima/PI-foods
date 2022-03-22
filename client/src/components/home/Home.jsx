import { React } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes, getDiets, filterByDiet } from "../../actions";
import Card from "../card/Card.jsx";
import Paginado from "../paginado/paginado";
import {Link} from "react-router-dom";

export default function Home(){

    
    //to use the hook use dispatch
    const dispatch = useDispatch()
    //brings all the foods like the mapStateToProps.
    const allFoods = useSelector((state) => state.foods)
    const allDiets = useSelector((state) => state.diets)
    
    //dispatch like the mapDispatchToProps.
    useEffect(()=>{
        dispatch(getRecipes())
    },[])
    
    //dispatch the diets
    useEffect(()=>{
        dispatch(getDiets())
    },[])

    function handleFilterDiet(e){
        dispatch(filterByDiet(e.target.value))
    }
    //refresh
    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes())
    }
    

    //actual page
    const[currentPage, setCurrentPage] = useState(1);
    //quantity of foods per page
    const[foodsPerPage, setFoodsPerPage] = useState(9);
    //the index of the last recipe
    const indexOfLastFoods = currentPage * foodsPerPage;
    //the index of the first recipe
    const indexOfFirstFoods = indexOfLastFoods - foodsPerPage;
    //all the recipes of that page - the slice divide the array depending of the parameter, doesn't bring the last
    //so its from 0 to 9 and brings 0,1,2,3,4,5,6,7,8
    const currentFoods = allFoods.slice(indexOfFirstFoods, indexOfLastFoods) //from one to other

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    return(
        <div>
           <h1>Only Tasty</h1>
           <button onClick={e=>{handleClick(e)}}>
               Refresh
           </button>
           <div>
                <select>
                    <option value="asce">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select onClick={e => handleFilterDiet(e)}>
                    <option value="all">all</option>
                    { //aun no llega
                        allDiets && allDiets.map(e => { return(
                            <option value={e.name}>{e.name}</option>)
                        })
                    }
                </select>
                <select>
                    <option value="maxScore">Max score</option>
                    <option value="minScore">Min score</option>
                </select>
                <Paginado 
                foodsPerPage = {foodsPerPage}
                allFoods = {allFoods.length}
                paginado = {paginado} />
                
           </div>
                {currentFoods && currentFoods.map(e => {
                    return(
                    <div>
                        <Link to={"/home/" + e.id}>
                    <Card name={e.name} image={e.image} diets={e.diets} score={e.score} />
                        </Link>
                    </div> )
                })}
        </div>
    )
}