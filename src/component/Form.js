import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Form({addItem}){
    const [formData, setFormData] = React.useState({title: ""})

    function handleChange(event){
        setFormData(prevData => (
            {
                ...prevData,
                title: event.target.value
            }
        ))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        addItem(formData.title)
        setFormData({title: ""})
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <input 
                   type="text"
                   name="title"
                   placeholder="What Do You want to do?"
                   value={formData.title}
                   onChange={handleChange}
               />

               <button type="submit">+ Add</button>
           </form>
        </div>
    )
}