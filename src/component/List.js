import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';






export default function List({list, deleteList, setChecked, handleEdit}){
    const style = {textDecoration:list.isCompleted ? "line-through": "inherit"}

    return (
            <form onSubmit={e => e.preventDefault()}>
            <Grid
            direction="row"
            justifyContent="flex-start"
            container
            spacing={2}
            >
                <Grid item xs="auto">
                    <Checkbox 
                        size="small" 
                        sx={{color: "blue", '&.Mui-checked': {color: "green"}}}
                        onChange={() => setChecked(list.title)}
                        checked={list.isCompleted}
                    />
                </Grid>

                <Grid item xs={3}>
                    <h6 style={style}>{list.title}</h6>
                </Grid>

                {!list.isCompleted && 
                    <Grid item xs={3}>
                    <Button 
                        size="small"
                        color="primary"
                        onClick={() => handleEdit(list)}
                    > 
                        <EditIcon fontSize="small"/>
                    </Button>
                    </Grid>
                }

                <Grid item xs={3}>
                <Button
                    variant="text" 
                    color="error"
                    size="small"
                    onClick={() => deleteList(list.title)}
                >
                    <DeleteIcon fontSize="small" />
                </Button>
                </Grid>
            </Grid>
            </form>
    )
}

{/* <div>
        <form onSubmit={e => e.preventDefault()}>
            <Checkbox 
                size="small" 
                sx={{color: "blue", '&.Mui-checked': {color: "green"}}}
                onChange={() => setChecked(list.title)}
                checked={list.isCompleted}
            />
            <pre style={style}>{list.title}</pre>

            {!list.isCompleted && <Button 
                size="small"
                color="primary"
                onClick={() => handleEdit(list)}
            > 
                <EditIcon fontSize="small"/>
             </Button>}

            <Button
                variant="text" 
                color="error"
                size="small"
                onClick={() => deleteList(list.title)}
            >
                <DeleteIcon fontSize="small" />
            </Button>
        </form>
        </div> */}