import React, {useState} from "react";
import NavigationBar from "../navigation-bar/navigation-bar";
import HeaderApp from "../header-app/header-app";
import MainApp from "../main-app/main-app";
import TodoAddModal from "../todo-add-modal/todo-add-modal";

import "./app.scss";

function App () {
    const [todos, setTodos] = useState ([
        {
            id: 1,
            head: "Главная цель",
            text: "Выжить в долине смерти",
            isCompleted: false,
        },
        {
            id: 2,
            head: "Задание",
            text: "Выполнить пункты из задания",
            isCompleted: true,
        }
    ]);
   
   
//     const [todos, setTodos] = useState ({
//         items: [{
//             id: 1,
//             head: "Head 1",
//             text: "Пробую React хуки",
//             isCompleted: false,
//         },
//         {
//             id: 2,
//             head: "Head 11",
//             text: "It is awesome",
//             isCompleted: true,
//         }],
//         visible: false
//    });

    const addTodo = value => {
    value.id = todos.length + 1;
    setTodos ([...todos, value]);
}
    
    
    // const addTodo = val => {
    //     val.id = todos.length + 1;
    //     const item = {...todos};
    //     const items = [...todos, val];
    //     setTodos (items);
    // }

    const onToggleCompleted  = e => {
        console.log(e.key);
        // done = true;
        // setTodos(todos.isCompleted, done);
    }


    return (
        <div className="App">
            <TodoAddModal addTodo={addTodo} />
            <NavigationBar />
            <HeaderApp 
            addTodo={addTodo} />
            <MainApp
            todos={todos}
            onToggleCompleted={onToggleCompleted}
             />
        </div>
    );
};

export default App;