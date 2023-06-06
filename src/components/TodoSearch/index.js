import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';
// import searchIcon from "../assets/search-icon.svg";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return (
        <div className="search-container">
            <input
                className='icono-placeholder'
                value={searchValue}
                placeholder="Cortar cebolla"
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </div>
    );
}

export {TodoSearch};