import React from 'react';
import { TodoContext } from '../TodoContex';
import './TodoForm.css'

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}  className='TodoForm-container'>
            <label className='TodoForm-label'>Crea un nuevo ToDo</label>
            <textarea className='TodoForm-textarea' 
                placeholder='Cortar cebolla para el almuerzo'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className='TodoForm-buttons-container'>
                <button 
                    type='button' 
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                    >Cancelar</button>
                <button type='submit' className='TodoForm-button TodoForm-button--add'>Añadir</button>        
            </div>
        </form>
    );
  }

  export { TodoForm };