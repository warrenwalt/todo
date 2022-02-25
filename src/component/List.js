import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function List({list, deleteList, setChecked}){
    const style = {textDecoration:list.isCompleted ? "line-through": "inherit"}

    return (
        <div>
        <form onSubmit={e => e.preventDefault()}>
            <input 
                type="checkbox"
                name='isComplete'
                onChange={e => setChecked(list.title)}
                checked={list.isCompleted}
            />
            <pre style={style}>{list.title}</pre>
            <button
                onClick={() => deleteList(list.title)}
            >
            Delete
            </button>
        </form>
        </div>
    )
}