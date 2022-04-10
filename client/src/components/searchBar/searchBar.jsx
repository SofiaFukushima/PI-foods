import { React } from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { nameSearch } from "../../actions";
import "./searchBar.css"

export default function SearchBar(){

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    function handleInputName(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(nameSearch(name))
        setName('')
    }
    return(
        <div class="wrapper">
            <input
                type = "text"
                placeHolder = "Search food..."
                onChange = {e => handleInputName(e)}
                className="search__input"
            >
            </input>
                <button type="submit" onClick={e => handleSubmit(e)} className="search__button"> 
                    Submit
                </button>
        </div>
    )
}