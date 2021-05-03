import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todoList = [
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
  constructor(){
    super();
    this.state = {
      todolist: todoList
    }
  }
  addTodo = (todo)=>{
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed:false
    }
    this.setState({
      todolist: [...this.state.todolist, newTodo]
    })
  }
  
  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
          <TodoList todolist={this.state.todolist}/>
          <TodoForm addTodo ={this.addTodo}/>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
