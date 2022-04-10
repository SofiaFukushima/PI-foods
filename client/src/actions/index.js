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

export function nameSearch(payload){
    return async function(dispatch){

            const json = await axios.get("http://localhost:3001/recipes?name=" + payload);
            return dispatch({
                type: "NAME_SEARCH",
                payload: json.data
            })

    }
}

export function createRecipe(form){
    return async function(dispatch){

        console.log(form) //nice llego piola

        const response = await axios.post("http://localhost:3001/recipe", form)

        return response
    }
}

export function getDetail(id){
    return async function(dispatch){
        let json = await axios("http://localhost:3001/recipes/" + id);

        return dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}