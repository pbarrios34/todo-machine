import React from "react";
import { TodoContext } from "../TodoContex";
import './TodosCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } =React.useContext(TodoContext)
    return (
      <h1>
        Has completado {completedTodos} de {totalTodos} TODOs
      </h1>
    );
  }

export { TodoCounter };