import React, {useState} from "react";

import "./todo-item.scss";

function TodoItem ({todo, index}) {

    return (
        <div className="item">
            <div className="priority">
                <i className="material-icons md-12">arrow_upward</i>
                <span><b>High priority</b></span>
                <span className="time-create">7-May 2019 13:00</span>
            </div>
            <div className="item-todo-text">    
                <div className="icon-item">
                    <span>L</span>
                </div>
                <div className="text">
                    <h6> {todo.head} </h6>
                    {/* { todos.map((todo, index) => (
                        <Todo key={index} index={index} todo={todo} />
                    ))} */}
                    <span> {todo.text} </span>
                    {/* <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio asperiores dolorum quos non consequatur incidunt sed inventore quas debitis. Iste?</span> */}
                </div>
                <div className="edit-menu">
                    <i className="material-icons">more_vert</i>
                </div>
            </div>
        </div>
    );
};


// function Todo ({todo, index}) {
//     return (
//         <span>
//             {todo.text}
//         </span>
//     )
// }

export default TodoItem;