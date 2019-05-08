import React, {useState} from "react";
import TodoForm from "../todo-form/todo-form";
import TodoItem from "../todo-item/todo-item";
import TodoCurrent from "../todo-current/todo-current";

import "./header-app.scss";

function HeaderApp ({addTodo}) {

 

//     let [todos, setTodos] = useState ([
//     //     {
//     //         id: 1,
//     //         head: "Head 1",
//     //         text: "Пробую React хуки",
//     //         isCompleted: false
//     //     },
//     //     {
//     //         id: 2,
//     //         head: "Head 11",
//     //         text: "It is awesome",
//     //         isCompleted: false
//     //     },
//    ]);

//    function addTodo(val) {
//         val.id = todos.length + 1;
//         setTodos ([...todos, val]);
//     }
   
    return (
        <header className="head">
            <div className="header-item"><i className="material-icons">menu</i></div>
            <div className="header-item">
                <TodoForm addTodo={addTodo} />
            </div>
            <div className="header-item"><i className="material-icons">filter_list</i></div>
            <div className="header-item"><i className="material-icons">sort_by_alpha</i></div>
            <div className="header-item"><button type="button" className="add-button">+Add todo</button></div>  {/* btn btn-primary */}
            <div className="header-item"><i className="material-icons md-36">account_circle</i>
            </div>
        </header>
    );
};




export default HeaderApp;