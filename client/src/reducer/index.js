import { getRecipes, getDiets, filterByDiet } from "../actions";


const initialState = {
    foods: [],
    allFoods:[],
    diets: [],
    allDiets: []
}

function rootReducer(state = initialState, action){

    switch(action.type){

        case 'GET_RECIPES':
            return{
                ...state,
                foods: action.payload,
                allFoods: action.payload,
            }

        case 'GET_DIETS':
            return{
                ...state,
                diets: action.payload,
                allDiets: action.payload
            }
        case 'FILTER_BY_DIET':
            const allFoods = state.allFoods;


            const dietsFilter = action.payload === 'all' ? allFoods : allFoods.filter(recipe => {
                if (recipe.diets.length > 0) { 
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                }
            });

            return{
                ...state,
                foods: dietsFilter
            }

        default: 
            return state
    }

}

export default rootReducer;