import React,{useState} from 'react';
import Header from './components/Header'
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import FirstR from './components/FirstR';
function App() {
    /*const [taskTodo,setTaskTodo] =useState([])
  
      const [inputText,setInputText] =useState("");
      const deleteTask =(id) =>{
        taskTodo.splice(id,1);
        setTaskTodo(taskTodo.filter(num=> num.id!==id));
        /*<Header/>
        <Todo setInputText={setInputText} taskTodo={taskTodo}/>
        <TodoList deleteTask={deleteTask}/>
        DOM in react for every change,
        --there is a component change instead of the whole page,
        --react adjust the DOM,

    };
    const editTask = (id)=>{

    };
    <></> in place of react.fragment;
    const ROM, let uses RAM(variables n let);
    function ac() {


      function bc() {//inner function can not be called outside it's parent;

      }
      bc()
    }
    ac(); it will not run a function inside it. bc can only be called inside ac();
    js also hoist functions though it is not among best practices eg ;
    ac();
    function ac() {

    }
    issues with local variables--at the end of it's usage,
    it's memory will be freed unlike global variables.
    effective programming-
    
    function showText(tag) {
      var pinky =  document.getElementById('pinky');
      var par = document.getElementById('frost');
      //par.innerHTML = pinky.value.length; 
      //par.innerHTML = pinky.innerHTML;
      //alert('good');
      /*if(tag.value.length <5) {
        par.innerHTML = "weak";
        par.style.color = "red";
      }
      else if(tag.value.length >=5 && tag.value.length< 10) {
        par.innerHTML = "medium";
        par.style.color = "blue";
      }
      else{
        par.innerHTML = "strong";
        par.style.color = "green";

      }
      try{
          //par.innerHTML = pinky.value.length;

      }
      catch(error){
          //alert('good');
          console.log(error);

      }
      //showText();
      import app2
      import {app2} from "./app2";
        <App2.App1/>not a good practice
        
        <input type="text" id="pinky" onInput={(e)=>showText(e.target)}/>
        
        <p id="frost"></p>
        <button id="dropsy">click me</button>
      */
     
  
  //showText();

    return (
      <React.Fragment>
        <FirstR/>
      
      </React.Fragment>
    );
}

export default App;
