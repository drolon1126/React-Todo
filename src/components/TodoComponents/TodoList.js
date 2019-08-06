// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <ul className="todo-list">
      {props.toDoList.map(task => {
        if(props.searchParam ==='' || task.task === props.searchParam){
          return (
            <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
          );
        } else {
          return(
            <>
            </>
          );
        }
        })
      } 
    </ul>
  );
}

export default TodoList;
