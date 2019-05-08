import React, {useState} from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-completed.scss";

function TodoCompleted ({todos, onToggleCompleted}) {

    return (
        <div className="todo-completed">
            <div className="current-header">
                <h4>Completed (3)</h4>
            </div>
                { todos.map((todo, index) =>  {
                    if (todo.isCompleted === true) {
                        return (
                            <TodoItem  key={todo.id} index={todo.id} todo={todo} onToggleCompleted={onToggleCompleted} />
                        )
                    }
                })
                }

        </div>      
    );
};

export default TodoCompleted;