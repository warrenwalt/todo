import logo from './logo.svg';
import './App.css';
import React from 'react';

import Form from './component/Form';
import List from './component/List';

function App() {
  const [list, setList] = React.useState()
  return (
    <div className="App">
      <Form />
      {list ? 
      <List />
      :
      <div>
        <h2>Your To Do List Goes Here</h2>
      </div>
      }
    </div>
  );
}

export default App;
