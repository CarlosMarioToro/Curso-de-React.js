import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    return (
        <div className="create-todo-button" >
            <div >
                <button
                    className="CreateTodoButton"
                    onClick={
                        () => {
                            setOpenModal(state => !state)
                        }
                    }
                ></button>
            </div>
        </div>
    );
}

export {CreateTodoButton};