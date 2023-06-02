import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <div className="create-todo-button" >
            <div >
                <button 
                    onClick={
                        (event) => {
                            console.log('le diste click')
                            console.log(event.target);
                        }
                    }
                ></button>
            </div>
        </div>
    );
}

export {CreateTodoButton};