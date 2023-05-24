import React from 'react';
import './TodoSearch.css';
// import searchIcon from "../assets/search-icon.svg";

function TodoSearch() {
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