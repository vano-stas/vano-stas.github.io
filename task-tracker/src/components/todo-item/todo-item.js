import React from "react";

import "./todo-item.scss";

function TodoItem ({todo, key, onToggleCompleted}) {

    const randomColor = () => {
        const r = Math.round(Math.random()*255);
        const g = Math.round(Math.random()*255);
        const b = Math.round(Math.random()*255);
        return (`${r},${g},${b}`);
    };
    const color = randomColor();

    return (
        <div key={key} className="item" onClick={onToggleCompleted}>
            <div className="priority">
                <i className="material-icons md-12">arrow_upward</i>
                <span><b>High priority</b></span>
                <span className="time-create">7-May 2019 13:00</span>
            </div>
            <div className="item-todo-text">    
                <div className="icon-item" style={{background: `rgb(${color})`}}>
                    <span>{todo.head[0].toUpperCase()}</span>
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



export default TodoItem;