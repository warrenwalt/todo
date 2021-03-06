import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Form from './component/Form';
import ToDoList from './component/ToDoList';
import ReactConfetti from 'react-confetti';

function App() {
  const [toDoList, setToDoList] = React.useState(() => JSON.parse(localStorage.getItem("list")) || [])

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
  
  return (
    <div className="App">
    {toDoList.length === 0 && <ReactConfetti />}
      <Form 
        addItem={addItem}
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
        />
      }
    </div>
  );
}

export default App;
