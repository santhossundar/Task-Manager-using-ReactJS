import React from 'react';
import Task from './Task';

const Tasks = (tasks) => {

return(

    <div className="tasks-container">
        <hr/>
        {tasks.t.map(item => {
            return <Task t={item.task} w={item.when} key={item.id}/>
        })}
    </div>
    
    )

} 

export default Tasks