import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoImage } from '../TodoImage';
import { TodoContext } from '../TodoContex';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <>
          <div className='searchContainer'>
            <TodoCounter />
            <TodoSearch />

            <TodoImage />
          </div>
          <div className='taskList'>
                <TodoList>
                  {loading && (
                    <>
                      <TodosLoading />
                      <TodosLoading />
                      <TodosLoading />
                      <TodosLoading />
                      <TodosLoading />
                    </>
                  )}
                  {error && <TodosError />}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                  {searchedTodos.map(todo => (
                      <TodoItem 
                      key={todo.text}
                      text={todo.text} 
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                      />
                  ))}
                </TodoList>            
          </div>
            <CreateTodoButton />
          
        </>
      );
}

export { AppUI };