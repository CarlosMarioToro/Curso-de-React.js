import './TodoSearch.css';
import searchIcon from "../assets/search-icon.svg";

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <div className="search-container">
            <input
                className='icono-placeholder'
                value={searchValue}
                placeholder="Cortar cebolla"
                // onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* <img className="search-icon" src={searchIcon} alt="search icon" /> */}
        </div>
    );
}

export {TodoSearch};