import './TodosLoading.css';
// import searchIcon from "../assets/search-icon.svg";

function TodosLoading() {
    return (
        <>
            <li className="skeleton">
                <span className='skeleton-IconComplete' ></span>
                <span className='skeleton-text' ></span>
                <span className='skeleton-IconDelete' ></span>
            </li>   
        </>
    );
}

export {TodosLoading};