import React, { useEffect, useRef, useState } from 'react';
import '../Todo/Todo.css'

import Button from '../../component/Button/Button';
import ListItems from '../../component/ListItems/ListItems';
import FInput from '../../component/Input/Input';


function MainTodo()
{

  const [todo, saveTodo] = useState([]);
  const [input, setInput] = useState('');
  const ref = useRef(null);

  // for getting all tasks after refreshing the page
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todo'))
    if (storedTodos) saveTodo(storedTodos)
  }, [])

  // saving all tasks in local storage
  useEffect(function()
  {
    localStorage.setItem('todo', JSON.stringify(todo))
  },[todo])

  // for focusing the cursor on input field
  useEffect(()=>
  {
    ref.current.focus()
  }, [])


  function change(event)
  {
    let value = event.target.value
    setInput(value);
  }


  function saveTask()
  {
    saveTodo( [...todo, {id: Date.now(), title: input, isComplete: false}] );
    setInput('');
  }


  function deleteTask(todoId)
  {
    const removedTodo = todo.filter(function(item)
      {
        return item.id !== todoId
      })
    saveTodo(removedTodo)
  }


  function completeTask(todoId)
  {
    const updatedTodo = todo.map(function(item)
    {
      if (item.id === todoId)
      {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    saveTodo(updatedTodo);
  }

  return (
    <>
      <div className='mainTodoContainer'>
        <div className="rightSide">
          <div className='headingAndPara'>
            <h1>Your Task List</h1>
            <p>Add Tasks to your list by typing to the right and pressing enter. You may then view pending tasks below.</p>
          </div>
          
          <div className='taskItems'>
            <ListItems todo={todo} deleteTask={deleteTask} completeTask={completeTask} />
          </div>
        
        </div>

        <div className="leftSide">
          <FInput value={input} onChange={change} placeholder='Enter task here' ref={ref}/>
          <Button onClick={saveTask} />
        </div>

      </div>
      
    </>
  )
}




export default MainTodo;