import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';





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
           <Grid
            container
            spacing={3}
            justifyContent="center"
            style={{marginTop: "50px"}}
           >
                <Grid item xs="auto">
                    <input
                        required
                        type="text"
                        name="title"
                        placeholder="What Do You want to do?"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs="auto">
                    <Fab size="small" color="primary" type="submit">
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
           </form>
        </div>
    )
}