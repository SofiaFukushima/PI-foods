
const initialState = {
    foods: [],
    allFoods:[],
    diets: [],
    allDiets: [],
    foodDetail:[]
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
                if (recipe.diets && recipe.diets.length > 0) { 
                    if(recipe.diets.find(element => element === action.payload)) return recipe
                } else if(recipe.Diets && recipe.Diets.length>0){
                    if(recipe.Diets.find(element => element.name === action.payload)) return recipe
                }
            })
            
            return{
                ...state,
                foods: dietsFilter
            }
            case 'FILTER_BY_ALPHABET':
             
                const alphabetFilter = (action.payload === 'a-z') ?
                state.foods.sort(function(a,b){
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return -1
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1
                    }
                    return 0
                }):
                (action.payload === 'z-a') ? state.foods.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1
                    }
                    if(b.name.toLowerCase() < a.name.toLowerCase()){
                        return 1
                    }
                    return 0
                }) :
                state.foods //aaaa
                
                
                return{
                    ...state,
                    foods:alphabetFilter
                }
                
                case 'FILTER_BY_SCORE':
                    
                
                    const scoreFilter = (action.payload === 'maxScore') ?
                    state.foods.sort(function(a,b){
                        if((a.score - b.score)> 0){
                            return -1
                        }
                        if((b.score - a.score)<0 ){
                            return 1
                        }
                        return 0
                    }):
                    (action.payload === 'minScore') ? state.foods.sort(function(a,b){
                        if((a.score - b.score)< 0){
                            return -1
                        }
                        if((b.score - a.score)>0){
                            return 1
                        }
                        return 0
                    }) :
                    state.foods //aaaa
                    
                    return{
                        ...state,
                        foods:scoreFilter
                    }
                    
                    case "NAME_SEARCH":
                        return{
                            ...state,
                            foods: action.payload
                        }
                        
                    case "CREATE_RECIPE":
                        return{
                            ...state
                        }

                    case "GET_DETAIL":
                        return{
                            ...state,
                            foodDetail:action.payload
                        }
        default: 
            return state
    }

}

export default rootReducer;