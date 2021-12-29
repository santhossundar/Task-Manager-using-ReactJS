import './App.css';
import React from 'react';
import Form from './comp/Form';

const App = () => {

    return(

      <div id="App">
        <div className="header">
          <h2>Task Manager</h2>
        </div>
        <Form/>       
      </div>

    )
}

export default App;
