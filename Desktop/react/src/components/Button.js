import React from 'react'

const Button = (text,showTask,addTask) => {

  return (
    <React.Fragment>
        <button className='displayBtn' onClick={addTask}>{showTask?"Close Task":text}</button>
    </React.Fragment>
  )
}

export default Button