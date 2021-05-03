import React from "react";
import "./Todo.css"

const Todo = props =>{

    const complete = ()=>{
        props.taskCompleted(props.todo.id);
    }

    return (
        <h2 onClick={complete} className={props.todo.completed? "completed":""}>
            {props.todo.task}
            </h2>
    )
}


export default Todo;