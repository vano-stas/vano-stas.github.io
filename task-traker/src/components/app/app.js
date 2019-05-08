import React, {useState} from "react";
import NavigationBar from "../navigation-bar/navigation-bar";
import HeaderApp from "../header-app/header-app";
import MainApp from "../main-app/main-app";

import "./app.scss";

function App () {

   const [todos, setTodos] = useState ([
        {
            id: 1,
            head: "Head 1",
            text: "Пробую React хуки",
            isCompleted: false
        },
        {
            id: 2,
            head: "Head 11",
            text: "It is awesome",
            isCompleted: true
        },
    ]);


    const addTodo = val => {
        val.id = todos.length + 1;
        setTodos ([...todos, val]);
    }

    return (
        <div className="App">
            <NavigationBar />
            <HeaderApp 
            addTodo={addTodo} />
            <MainApp
            todos={todos}
             />
        </div>
    );
};

export default App;