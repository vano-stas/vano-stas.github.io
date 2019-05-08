import React, {useState} from "react";
import TodoForm from "../todo-form/todo-form";

import "./header-app.scss";

function HeaderApp ({addTodo, onToggleModal}) {
   
    return (
        <header className="head">
            <div className="header-item"><i className="material-icons">menu</i></div>
            <div className="header-item">
                <TodoForm addTodo={addTodo} />
            </div>
            <div className="header-item"><i className="material-icons">filter_list</i></div>
            <div className="header-item"><i className="material-icons">sort_by_alpha</i></div>
            <div className="header-item">
                <button type="button" className="add-button" onClick={onToggleModal}>+Add todo
                </button>
            </div>
            <div className="header-item"><i className="material-icons md-36">account_circle</i>
            </div>
        </header>
    );
};




export default HeaderApp;