function CreateTodoButton() {
    return (
        <div className="buttonContainer">
            <button 
                onClick={
                    (event) => {
                        console.log('le diste click')
                        console.log(event)
                        console.log(event.target)
                    }
                }
            >+</button>
        </div>
    );
  }

export { CreateTodoButton };