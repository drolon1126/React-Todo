import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/TodoComponents/SearchForm';
import './App.css';

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
      toDoList: localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : todoData,
      searchParam : '',
    }
  }

  searchTask = (taskName) => {
    this.setState({
      searchParam: taskName
    })
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    const tdl = [...this.state.toDoList, newTask];
    this.setState({
      toDoList: tdl
    })

    localStorage.setItem('toDoList', JSON.stringify(tdl));
  }
  toggleTask = id => {
    const tdl = this.state.toDoList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else return task;
    })
    this.setState({
      toDoList: tdl
    });

    localStorage.setItem('toDoList', JSON.stringify(tdl));

  }
  clearCompleted = (e) => {
    e.preventDefault();
    const tdl = this.state.toDoList.filter(task => !task.completed)
    this.setState({
      toDoList: tdl
    });
    localStorage.setItem('toDoList', JSON.stringify(tdl));
  };
  render() {
    return (
      <div>
        <h2>Things To Do</h2>
        <SearchForm searchTask={this.searchTask}/>
        <TodoList toDoList={this.state.toDoList} toggleTask={this.toggleTask} searchParam={this.state.searchParam}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
