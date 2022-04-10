import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { getDiets, createRecipe } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx"
import "./creation.css"

function validate(form) {
    let errors = {};
    if (!form.name) {
      errors.name = 'Name is require';
    } else if (!form.summary){
        errors.summary='Summary is require'
    } else if (!form.score){
        errors.score='Score is require'
    } else if (!form.healthyScore){
        errors.healthyScore='Healthy score is require'
    } else if (form.score<=0 || form.score>100) {
        errors.score = 'Invalid score (1-100)';
    } else if (form.healthyScore<=0 || form.healthyScore>100){
      errors.healthyScore='Invalid healthy score (1-100)'
    } else if (!form.diets){
        errors.diets="Diet require"
    }
    return errors;
  };

export default function CreateRecipe(){


    const dispatch = useDispatch();

    const navigate = useNavigate();

    const diets = useSelector((state) => state.diets);

    
    const [form, setForm] = useState({
        name:"",
        summary:"",
        score:"",
        healthyScore:"",
        steps:"",
        image:"https://i.ibb.co/Y7Mf3YT/Destacada-Instagram-Historia-Corea-Comida-asiatica.png",
        diets:[]
    });
    
    const [error, setError] = useState({})

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })

        let objError = validate( {
            ...form, 
            [e.target.name]:e.target.value
        })
        setError(objError)
    }
    
    
    function handleCheck(e){
        if(e.target.checked){
            setForm({
                ...form,
                diets: [...form.diets, e.target.value]
            })
        }
    }

    function handleNumber(e){
        let number = parseInt(e.target.value)
        setForm({
            ...form,
            [e.target.name] :number
        })

        let objError = validate( {
            ...form, 
            [e.target.name]:e.target.value
        })
        setError(objError)
    }
    
    async function handleSubmit(e){
        e.preventDefault()
        await dispatch(createRecipe(form))
        alert("Recipe created!")
        setForm({
            name:"",
            summary:"",
            score:"",
            healthyScore:"",
            steps:"",
            image:"https://i.ibb.co/Y7Mf3YT/Destacada-Instagram-Historia-Corea-Comida-asiatica.png",
            diets:[]
        })
        navigate("/home")
    }


    useEffect(()=>{
        dispatch(getDiets())
    },[]);

    
    return(
        <div>
            <NavBar></NavBar>
            <h1 className="title">Create your recipe</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input 
                    type="text" 
                    value={form.name} 
                    name="name"
                    onChange={handleChange}
                    ></input>
                    {error.name && (<p className= 'error'>{error.name}</p>)}
                </div>
                <div>
                    <label>Summary:</label>
                    <input 
                    type="text" 
                    value={form.summary} 
                    name="summary"
                    onChange={handleChange}
                   ></input>
                    {error.summary && (<p className= 'error'>{error.summary}</p>)}
                </div>
                <div>
                    <label>Score:</label>
                    <input
                    type="number" 
                    value={form.score} 
                    name="score" 
                    min="1"
                    max="100" 
                    onChange={handleNumber}
                    ></input>
                    {error.score && (<p className= 'error'>{error.score}</p>)}
                </div>
                <div>
                    <label>Healthy score:</label>
                    <input 
                    type="number" 
                    value={form.healthyScore} 
                    name="healthyScore"
                    min="1"
                    max="100"
                    onChange={handleNumber}
                    ></input>
                    {error.healthyScore && (<p className= 'error'>{error.healthyScore}</p>)}
                </div>
                <div>
                    <label>Steps:</label>
                    <input 
                    type="text" 
                    value={form.steps} 
                    name="steps"
                    onChange={handleChange}></input>
                </div>
                <div>
                    <label>Image:</label>
                    <input 
                    type="text" 
                    value={form.image} 
                    name="image"
                    onChange={handleChange}></input>
                </div>
                <div>
                    <label>Diets:</label>
                    {
                        diets && diets.map(e => { return(
                            <label>
                                <input
                                type="checkbox"
                                name={e.name}
                                value={e.name}
                                onChange={handleCheck}
                                ></input>
                                {e.name}
                            </label>)
                        })
                    }
                    {error.diets && (<p className= 'error'>{error.diets}</p>)}
                </div>
                <div>
                    {error.name || error.summary || error.score || error.healthyScore || error.diets || !form.name
                    || !form.summary ? null :
                        <button type="submit" onClick={handleSubmit} className="button">Create</button>    
                    }
                </div>
            </form>
        </div>
    )
}