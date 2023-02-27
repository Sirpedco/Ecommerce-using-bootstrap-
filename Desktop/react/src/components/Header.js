import React from 'react';
import Tech from '../Style/Tech.css';
import Button from './Button';
const Header = ({addTask,showTask}) => {
  return (
    <React.Fragment>
        <nav>
            <h1>Task Manager</h1>
            <Button text="Add Task" addTask={addTask} showTask={showTask}/>
        </nav>

    </React.Fragment>
  )
}

export default Header