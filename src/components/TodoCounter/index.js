import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    return (

        totalTodos === completedTodos ?

        <h1>
            Has completado todos tus ToDo'S
        </h1>
        :
        <h1>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDo's
        </h1>
    );
}

export {TodoCounter};