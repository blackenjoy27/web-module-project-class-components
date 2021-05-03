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
  taskCompleted = (id)=>{
    const temp = this.state.todolist.map(todo=>{
      if(todo.id === id){
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo;
    })
    this.setState({todolist:temp});
  }

  clearComplete = ()=>{
    const temp = this.state.todolist.filter(todo=>!todo.completed);
    this.setState({todolist:temp});
  }
  
  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
          <TodoList taskCompleted = {this.taskCompleted} todolist={this.state.todolist}/>
          <TodoForm addTodo ={this.addTodo} clearComplete={this.clearComplete}/>
        
      </div>
    );
  }
}

export default App;
