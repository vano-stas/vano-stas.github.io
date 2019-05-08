import React, {useState} from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-completed.scss";

const TodoCompleted = ({todos}) => {

    return (
        <div className="todo-completed">
            <div className="current-header">
                <h4>Completed (3)</h4>
            </div>
            {/* <div className="item">
                <div className="priority">
                    <i className="material-icons md-12 completed-text">check_circle_outline</i>
                    <span className="completed-text">Completed!</span> */}
                    {/* <span className="time-create">7-May 2019 13:00</span> */}
                {/* </div>
                <div className="item-todo-text">    
                    <div className="icon-item">
                        <span>L</span>
                    </div>
                    <div className="text">
                        <h6>Lorem, ipsum.</h6>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio asperiores dolorum quos non consequatur incidunt sed inventore quas debitis. Iste?</span>
                    </div>
                    <div className="edit-menu">
                        <i className="material-icons">more_vert</i>
                    </div>
                </div>
            </div> */}
                { todos.map((todo, index) =>  {
                    if (todo.isCompleted === true) {
                        return (
                            <TodoItem key={index} index={index} todo={todo} />
                        )
                    }
                })
                }

        </div>      
    );
};

function Todo ({todo, index}) {
    return (
        <div>
            {todo.text}
        </div>
    )
}


export default TodoCompleted;