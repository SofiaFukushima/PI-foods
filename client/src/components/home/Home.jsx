import { React } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getRecipes, getDiets, filterByDiet, filterByAlphabet, filterByScore } from "../../actions";
import Card from "../card/Card.jsx";
import Paginado from "../paginado/paginado";
import SearchBar from "../searchBar/searchBar";
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import "./home.css"

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

    //the diet filter handle on click
    function handleFilterDiet(e){
        dispatch(filterByDiet(e.target.value))
        setCurrentPage(1);
    }

    //the alphabet filter handle on click.
    function handleFilterAlphabet(e){
        dispatch(filterByAlphabet(e.target.value))
        setCurrentPage(1);
        setAplhabet(`Alphabet order ${e.target.value}`) // this makes the render happens
    }

    //the score filter handle on click.
    function handleFilterScore(e){
        dispatch(filterByScore(e.target.value))
        setCurrentPage(1);
        setScore(`Score order ${e.target.value}`)
    }

    //refresh
    function handleRefresh(e){
        e.preventDefault();
        dispatch(getRecipes())
    }

    //the render of the score
    const[score, setScore] = useState('')
    //the render of the alphabet
    const[alphabet, setAplhabet] = useState('')
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

    console.log(allFoods)

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    return(
        <div>
            <NavBar></NavBar>
           <button onClick={e=>{handleRefresh(e)}} className="button">
               Refresh
           </button>
           <div>
                <select onClick={e => handleFilterAlphabet(e)} className="button">
                <option value="allAlphabet">All</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
                <select onClick={e => handleFilterDiet(e)} className="button">
                    <option value="all">all</option>
                    {
                        allDiets && allDiets.map(e => { return(
                            <option value={e.name}>{e.name}</option>)
                        })
                    }
                </select>
                <select onClick={e => handleFilterScore(e)} className="button">
                    <option value="allScore">All</option>
                    <option value="maxScore">Max score</option>
                    <option value="minScore">Min score</option>
                </select>
                
                <SearchBar />
                
           </div>
           <div class="cards">
                {currentFoods && currentFoods.map(e => {
                    return(
                        <div>
                        <Link to={"/home/" + e.id}>
                    <Card name={e.name} image={e.image} diets={e.diets ? e.diets : e.Diets} score={e.score} healthyScore={e.healthyScore} />
                        </Link>
                    </div> )
                }) }
            </div>
            <div className="paginado">
                <Paginado 
                foodsPerPage = {foodsPerPage}
                allFoods = {allFoods.length}
                paginado = {paginado}/>
            </div>
        </div>
    )
}