import React, { Component } from 'react';

//function App() {
class AddTodo extends Component {
 
  state = {
    content: ''
  }

  handleOnChange = (e) => {
    
    // sync the state with the textbox value
    this.setState({
      content: e.target.value
    })
  }

  handleOnSubmit = (e) => {

    e.preventDefault();

    //console.log(document.getElementById("todo_to_add").value);

    // add the current state content to todos
    this.props.addTodo(this.state.content);

    // clear state
    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className="AddTodo">
        <form onSubmit={this.handleOnSubmit}>
        <label>Add a todo:</label>
        <input type="textbox" id="todo_to_add" onChange={this.handleOnChange} value={this.state.content} />
        </form>
      </div>
    );
  }

}

export default AddTodo;