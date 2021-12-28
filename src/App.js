import './App.css';
import React from 'react';
import Form from './comp/Form';
import Tasks from './comp/Tasks';
import axios from 'axios';
import {useEffect, useState} from 'react';

const App = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

      axios.get('http://localhost:5000/tasks')
      .then(response => {

          setTasks(response.data);
          
      })
      .catch(error => {
          console.log(error)
      });

    }, []);

    return(

      <div id="App">
        <div className="header">
          <h2>Task Manager</h2>
        </div>
        <Form/>
        <Tasks t={tasks} />
      </div>

    )
}

export default App;
