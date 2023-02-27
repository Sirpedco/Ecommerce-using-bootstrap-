import React,{useState} from 'react'

const Todo = ({ inputText,setInputText,}) => { 
    const [taskTodo,setTaskTodo] =useState([]);
    const setinputs ={title: "",date: "",time: "",}
    const submitForm=(e) =>{
        e.preventDefault();
        if(inputText)
        setTaskTodo([...taskTodo, {text: inputText}]);
        //setinputs({[e.target.name]:e.target.type==='checkbox'? e.target.checked:e.target.value});
        setInputText("");
    }
    
    const inputTextHandler = (e)=> {
       console.log(e.target.value);

        
    }
    const saveTask =() => {
      //const newItem = taskTodo;
      //console.log(newItem) 
      //if(inputText!==""){
      //const newItem=[...taskTodo, {text: inputText}];
      //setTaskTodo
      if(inputText!=="") {
        const taskDetails ={
            id: Math.floor(Math.random()*1000),
            value: inputText,
            isCompleted: false
            
        }
        setTaskTodo.concat(taskDetails);
      }
    }

    const deletehandler=()=>{

    }
  return (
    <React.Fragment>
        <form id='formForm' onSubmit={(e)=>submitForm(e)}>
            <div>
                <label>Title</label><br></br>
                <input type="text" name='title' placeholder='Enter task' 
                    onChange={inputTextHandler}  value={inputText}/>
            </div>
            <div>
                <label>Date</label><br></br>
                <input type="date" name='date' placeholder='Enter task date'
                   onChange={inputTextHandler} value={inputText} />
            </div>
            <div>
                <label>Time</label><br></br>
                <input type="time" name='time' placeholder='Enter time'
                    onChange={inputTextHandler}  value={inputText}/>
            </div><br></br>
            <div>
                <label>Reminder</label>&nbsp;&nbsp;
                <input  onChange={inputTextHandler} type="checkbox" name='reminder'
                   alue={inputText}  />
            </div>
            <div>
                <button  type='submit'onClick={saveTask} >Save Task</button>
            </div>
        </form>
    </React.Fragment>
  )
}

export default Todo