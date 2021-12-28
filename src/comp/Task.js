const Task = (tasks) => {

return(

    <div className="task-container">
        <h3>{tasks.t}</h3>
        <p>{tasks.w}</p>
    </div>
    )

} 

export default Task