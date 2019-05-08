import React, {useState} from "react";
import TodoForm from "../todo-form/todo-form";

import "./todo-add-modal.scss";

function TodoAddModal ({addTodo, ...todos}) {
    const [visible, setVisible] = useState ()

        return (
            <div className="todo-add-modal-wrapper visible">
                <div className="todo-add-modal">
                    <TodoForm addTodo={addTodo} />
                </div>
            </div>
        )
    

}

export default TodoAddModal;