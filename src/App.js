import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppBar, Button, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import Form from './component/Form';
import ToDoList from './component/ToDoList';
import ReactConfetti from 'react-confetti';

function App() {
  const [toDoList, setToDoList] = React.useState(() => JSON.parse(localStorage.getItem("list")) || [])
  const [editItem, setEditItem] = React.useState({isCompleted: false, title: ""})

  React.useEffect(() => {
    localStorage.setItem("list",JSON.stringify(toDoList))
  }, [toDoList])
  
  function deleteItem(item){
      setToDoList(prevItems => prevItems.filter(list => list.title !== item))
  }

  function setChecked(list){
    setToDoList(prevItems => prevItems.map(item => item.title === list ? {...item, isCompleted: !item.isCompleted}: item))
  }

  function addItem(item){
      setToDoList(prevItems => [item, ...prevItems])
  }

  function handleEdit(itemObj){
    setEditItem(toDoList.find(list => list.title === itemObj.title))
  }
  
  return (
    <div className="App">
    <AppBar
      color="secondary"
      enableColorOnDark
      position="fixed"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{mr:2}}
        >
          <MenuIcon/>
        </IconButton>
        <Typography
          variant="h4"
          component="div"
          sx={{flexGrow: 0.8}}
        >
          ToDo
        </Typography>
        <Button
          color="success"
          variant="contained"
        >
          Act
        </Button>
      </Toolbar>
    </AppBar>
    {toDoList.length === 0 && <ReactConfetti />}
      <Form 
        addItem={addItem}
        editItem={editItem}
      />
      {
        toDoList.length === 0 ?
          <div>
            <h1>Your ToDo List Is Empty!</h1>
          </div>
      :
        <ToDoList 
          toDoList={toDoList}
          deleteItem={deleteItem}
          setChecked={setChecked}
          handleEdit={handleEdit}
        />
      }
    </div>
  );
}

export default App;
