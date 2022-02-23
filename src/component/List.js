import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function List({list, deleteList}){
    const [checked, setChecked] = React.useState(false)

    function handleChange(e){
        setChecked(e.target.checked)
        console.log(e.target.checked)
    }

    const style = checked ? {textDecoration: "line-through"}: {textDecoration: "inherit"}

    return (
        <div>
        <form onSubmit={e => e.preventDefault()}>
            <input 
            style={{color: "red"}}
                type="checkbox"
                name='isComplete'
                onChange={handleChange}
                checked={checked}
                id="isComplete"
            />
            <pre style={style}>{list}</pre>
            <button
                onClick={() => deleteList(list)}
            >
            Delete
            </button>
        </form>
        </div>
    )
}