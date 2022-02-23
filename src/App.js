import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Form from './component/Form';
import ToDoList from './component/ToDoList';

function App() {
  const [toDoList, setToDoList] = React.useState([])
  
  function deleteItem(item){
      setToDoList(prevItems => prevItems.filter(list => list !== item))
  }

  function addItem(item){
      setToDoList(prevItems => [item, ...prevItems])
  }
  
  return (
    <div className="App">
      <Form 
        addItem={addItem}
      />
      <ToDoList 
        toDoList={toDoList}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
