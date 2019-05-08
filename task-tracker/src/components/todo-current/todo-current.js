import React, {useState} from "react";
import TodoItem from "../todo-item/todo-item";

import "./todo-current.scss";

function TodoCurrent ({ todos, onToggleCompleted }) {
 
    return (
        <div className="todo-current">
            <div className="current-header">
                <h4>ToDo (4)</h4>
                <i className="material-icons">view_module</i>
                <i className="material-icons">view_list</i>
            </div>

                { todos.map((todo) =>  {
                    const id = todo.id;
                    if (todo.isCompleted === false) {
                        
                        return (
                            <TodoItem key={todo.id} index={id} todo={todo} onToggleCompleted={onToggleCompleted} />
                        )
                    }
                })
                }


                {/* { todos.map((todo, index) => (
                    <TodoItem key={index} index={index} todo={todo} />
                ))} */}
            {/* <TodoItem /> */}
        </div>
    );
};


//---------------форма для добавления и названия и задачи

// function TodoForm ({addTodo}) {

//     const initFormState = {
//         id: null,
//         head: "",
//         text: "",
//         isCompleted: false
//     }

//     const [val, setVal] = useState (initFormState);

    

//     const handleInputChange = e => {
//         console.log(e.target.value);
//         const {name, value} = e.target;
//         setVal({...val, [name]:value })

//     }
//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!val.head || !val.text) return;
//         if (e.keyCode === 13) {
//             addTodo(val);
//             setVal(initFormState);
//         }
        
//     }

//     function handleEnter(e) {
//         // e.preventDefault();
//         if (!val.head || !val.text) return;
//         if (e.keyCode == 13) {
//             addTodo(val);
//             setVal(initFormState);
//         }
//       }
    
//     return (
//         <form onSubmit = {handleSubmit}>
//             <label htmlFor="head">Head </label>
//             <input type="text" name="head" value={val.head} onKeyDown={handleEnter} onChange={handleInputChange} />
//             <label htmlFor="text">Task </label>
//             <input type="text" name="text" value={val.text} onKeyDown={handleEnter} onChange={handleInputChange} />
//             {/* <button>Add</button> */}
//         </form> 
//     )
// }

//---------------------конец формы


export default TodoCurrent;