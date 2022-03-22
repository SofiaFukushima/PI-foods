import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import rootReducer from "../reducer"

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//the create store ask for the (reducer, the initial state and the enhancer that connect everything; in this case the middleware)

//thunk: let you write async logic.