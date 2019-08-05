import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: todoData,
    }
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDoList: [...this.state.toDoList, newTask]
    })
  }
  toggleTask = id => {
    this.setState({
      toDoList: this.state.toDoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else return task;
      })
    });
  }
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      toDoList: this.state.toDoList.filter(task => !task.completed)
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoList={this.state.toDoList} toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
