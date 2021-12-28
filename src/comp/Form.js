import React from 'react';
import axios from 'axios';

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            task: '',
            when: ''
        }
    }
  
    taskHandler = (e) => {
        this.setState({
            task: e.target.value,           
        })
    }

    whenHandler = (e) => {
        this.setState({
            when: e.target.value,           
        })
    }

    submitHandler = () => {
        if(!this.state.task && !this.state.when){
            alert("Fields are empty!");

        } else {
            axios.post('http://localhost:5000/tasks', this.state)
            .then(response => {
                console.log(response.data);

            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    render(){

        return (

                <div className="form-container">

                    <input className="in-task"
                        placeholder="Task"
                        type="text"
                        value={this.state.task}
                        onChange={this.taskHandler}/>

                    <input className="in-when"
                        placeholder="Day & Time"
                        type="text"
                        value={this.state.when}
                        onChange={this.whenHandler}/>                    

                    <button className="btn-submit" 
                        type="submit" 
                        onClick={this.submitHandler}>ADD</button>

                </div>               
                           
         )   
    }
};

export default Form