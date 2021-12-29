import React from 'react';
import axios from 'axios';
import Tasks from './Tasks';
import {useEffect, useState} from 'react';


const Form = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [when, setWhen] = useState('');
    const [tempTask, setTempTask] = useState([]);
    const [tempWhen, setTempWhen] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:5000/tasks')
        .then(response => {
  
            setTasks(response.data);
            
        })
        .catch(error => {
            console.log(error)
        });
  
      }, []);
  
    const taskHandler = (e) => {
        setTask(e.target.value);
    }

    const whenHandler = (e) => {
        setWhen(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(!task && !when){
            alert("Fields are empty!");

        } else {

            const taskObj = {
                task: task,
                when: when
            };

            axios.post('http://localhost:5000/tasks', taskObj)
            .then(response => {
                console.log(response.data);

                tasks.push(response.data);

                setTasks(tasks.map((obj)=>{
                    return obj
                }));

            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    return (

        <>

            <div className="form-container">

                <input className="in-task"
                        placeholder="Task"
                        type="text"
                        value={task}
                        onChange={taskHandler}/>

                <input className="in-when"
                        placeholder="Day & Time"
                        type="text"
                        value={when}
                        onChange={whenHandler}/>                    

                <button className="btn-submit" 
                        type="submit" 
                        onClick={submitHandler}>ADD</button>
               
            </div>   

            <div className="tasks-container" >
                    
                <Tasks t={tasks}/>
                    
            </div> 

        </>           
                           
    )   
};

export default Form