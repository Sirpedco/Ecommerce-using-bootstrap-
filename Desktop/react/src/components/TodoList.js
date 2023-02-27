import React,{useState} from 'react'

const TodoList = () => {

  const [taskTodo,setTaskTodo] =useState([
    {
      id: "1",
      title: "bake",
      time: "23:23",
      date: "2022-03-12"
    },
    {
      id: "2",
     title: "ice bake",
     time: "23:23",
     date: "2022-03-12"
   },
   {
     id: "3",
     title: "deliver cake",
     time: "23:23",
     date: "2022-03-12"
   }
   ])
 
  const deleteTask =(id) =>{
    console.log(taskTodo)
    //taskTodo.splice(id,1);
    setTaskTodo(taskTodo.filter(num=> num.id!==id));
  };
  const editTask = ()=>{
    
  };


  return(
    <React.Fragment>
      <div><h2>Todos</h2></div>
      <div className='myDiv'>
        {taskTodo.map((num =>
          <div key={num.id}>
            <div>
              <h2>{num.title}</h2>
              <button className='cancel' onClick={(e)=>deleteTask(num.id)}>delete</button><br></br>
              <button className='edit' onClick={()=>editTask(num.id)}>Edit</button>

            </div>
            <div>
              <div>{num.text}</div>
              <div>{num.time}</div>
            </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  )
}

export default TodoList