import React, {useState} from "react";

import "./todo-form.scss";


function TodoForm ({addTodo}) {

    // const [todos, setTodos] = useState ([
    //     {
    //         id: 1,
    //         head: "Head 1",
    //         text: "Пробую React хуки",
    //         isCompleted: false
    //     },
    //     {
    //         id: 2,
    //         head: "Head 11",
    //         text: "It is awesome",
    //         isCompleted: false
    //     },
    // ]);


    // const addTodo = val => {
    //     val.id = todos.length + 1;
    //     setTodos ([...todos, val]);
    // }

//--------------------------------------------------------

    const initFormState = {
        id: null,
        head: "",
        text: "",
        isCompleted: false
    }

    const [val, setVal] = useState (initFormState);

    

    const handleInputChange = e => {
        console.log(e.target.value);
        const {name, value} = e.target;
        setVal({...val, [name]:value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (!val.head || !val.text) return;
        if (e.keyCode === 13) {
            addTodo(val);
            setVal(initFormState);
        }
        
    }

    function handleEnter(e) {
        // e.preventDefault();
        if (!val.head || !val.text) return;
        if (e.keyCode == 13) {
            addTodo(val);
            setVal(initFormState);
        }
      }
    
    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="head">Head </label>
            <input type="text" name="head" value={val.head} onKeyDown={handleEnter} onChange={handleInputChange} />
            <label htmlFor="text">Task </label>
            <input type="text" name="text" value={val.text} onKeyDown={handleEnter} onChange={handleInputChange} />
            {/* <button>Add</button> */}
        </form> 
    )

}

export default TodoForm;