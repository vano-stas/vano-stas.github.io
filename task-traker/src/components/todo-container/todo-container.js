import React from "react";
import TodoCurrent from "../todo-current/todo-current";
import TodoComleted from "../todo-completed/todo-completed"; 

import "./todo-container.scss";

const TodoContainer = () => {
    return (
        <div className="row todo-container bg-warning">
            <TodoCurrent />
            <TodoComleted />
        </div>
    );
};

export default TodoContainer;