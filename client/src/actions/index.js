import axios from 'axios';

export function getRecipes(){
    return(
        async function(dispatch){
            let json = await axios(`http://localhost:3001/recipes`)

            return dispatch({
                type:'GET_RECIPES',
                payload: json.data
            })
        }
    )
}

export function getDiets(){
    return(
        async function(dispatch){
            let json = await axios(`http://localhost:3001/types`)

            return dispatch({
                type:'GET_DIETS',
                payload: json.data
            })
        }
    )
}

export function filterByDiet(payload){
    console.log(payload)
    return {
        type: "FILTER_BY_DIET",
        payload
    }

}

export function filterByAlphabet(payload){

    return{
        type: "FILTER_BY_ALPHABET",
        payload
    }
}

export function filterByScore(payload){

    return{
        type: "FILTER_BY_SCORE",
        payload
    }
}