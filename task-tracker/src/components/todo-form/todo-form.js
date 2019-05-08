import React, {useState} from "react";

import "./todo-form.scss";


function TodoForm ({addTodo}) {

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
            <label htmlFor="head">Head:</label>
            <input type="text" name="head" value={val.head} onKeyDown={handleEnter} onChange={handleInputChange} />
            <label htmlFor="text">Task:</label>
            <input type="text" name="text" value={val.text} onKeyDown={handleEnter} onChange={handleInputChange} />
            {/* <button>Add</button> */}
        </form> 
    )

}

export default TodoForm;