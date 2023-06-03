import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (

        total === completed ?

        <h1>
            Has completado todos tus ToDo'S
        </h1>
        :
        <h1>
            Has completado <span>{completed}</span> de <span>{total}</span> ToDo's
        </h1>
    );
}

export {TodoCounter};