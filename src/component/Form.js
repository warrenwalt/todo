import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Form({addItem}){
    const [formData, setFormData] = React.useState({isCompleted:false, title:""})

    function handleChange(event){
        setFormData(prevData => (
            {
                ...prevData,
                title: event.target.value,
                isCompleted: event.target.checked
            }
        ))
    }

    function handleSubmit(event){
        event.preventDefault()
        addItem(formData)
        setFormData({title: "", isCompleted:false})
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <input
                   required
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