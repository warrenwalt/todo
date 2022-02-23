import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function List({list, deleteList}){
    return (
        <div>
            <pre>{list}</pre>
            <button
                onClick={() => deleteList(list)}
            >
            Delete
            </button>
        </div>
    )
}