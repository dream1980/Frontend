import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './AddTodo';

//function App() {
class App extends Component {

  state = {
    todos: [
      { id: "1", desc: "buy a stroller bag" },
      { id: "2", desc: "study react" }
    ]
  }

  deleteTodo = (id) => {

    let todosList = this.state.todos.filter(todo => {
      if (todo.id === id)
        return false;
      else
        return todo;
    })

    this.setState({ 
      todos: todosList 
    })
  }
  
  addTodo = (todo) => {


    let todo_tmp = { id: "", desc: ""};
    todo_tmp.id = Math.random();
    todo_tmp.desc = todo;
    
    let todos_tmp = [...this.state.todos, todo_tmp];

    this.setState({
      todos: todos_tmp
    })
  }

  render () {
    return (
      <div className="App">
        <h1 className="center blue-text">My Todos:</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }

}

export default App;
