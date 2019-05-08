import React from "react";
import TodoContainer from "../todo-container/todo-container";
import TodoCurrent from "../todo-current/todo-current";
import TodoCompleted from "../todo-completed/todo-completed";

import "./main-app.scss";

function MainApp ({todos}) {
    return (
        <div className="main-app">
            <TodoCurrent todos={todos} />
            <TodoCompleted todos={todos} />
        </div>
    );
};

export default MainApp;