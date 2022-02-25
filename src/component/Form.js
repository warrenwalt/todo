import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';




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
              <Fab size="small" color="primary" type="submit">
                  <AddIcon />
              </Fab>
           </form>
        </div>
    )
}