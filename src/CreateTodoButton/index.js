import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    return (
        <div className="buttonContainer">
            <button 
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                }
            >+</button>
        </div>
    );
  }

export { CreateTodoButton };