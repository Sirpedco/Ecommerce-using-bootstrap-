import React,{useRef} from "react";
//import { useRef } from "react";



const FirstR = () => {
    const par =useRef();
    const pinky =useRef();
    //default for export of just a component;
    /*for multiple add export before the function,then import from "./FirstR";

    */
    function showText(tag) {
        //var pinky =  document.getElementById('pinky');
        //var par = document.getElementById('frost');
        //par.innerHTML = pinky.value.length; 
        //par.innerHTML = pinky.innerHTML;
        //alert('good');
        if(tag.length <5) {
          par.current.innerHTML = "weak";
          par.current.style.color = "red";
        }
        else if(tag.length >=5 && tag.length< 10) {
          par.current.innerHTML = "medium";
          par.current.style.color = "blue";
        }
        else{
          par.current.innerHTML = "strong";
          par.current.style.color = "green";
  
        }
       
    }
       

  return (
    <React.Fragment>
        <input type="text" ref={pinky} onInput={e=>showText(e.target.value)}/>
        
        <p id="frost"></p>
        <button id="dropsy">click me</button>
        <p ref={par}/>
    </React.Fragment>
  )
}

export default FirstR;