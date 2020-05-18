import React, {Component} from 'react';

class Params extends Component {
    
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

    render() {
        return (
            <div className="Params container center">
              <br/>
              <br/>
              <h1 className="header center orange-text">Parameters</h1>
              <div className="row left-align">
                  <form onSubmit={this.handleOnSubmit}>
                    <div className="container left">
                    <label>Parameter 1:</label>
                    &nbsp;&nbsp;
                    <input type="textbox" id="parameter1" onChange={this.handleOnChange} value={this.state.content} />
                    <br/><br/>
                    <label>Parameter 2:</label>
                    &nbsp;&nbsp;
                    <input type="textbox" id="parameter2" onChange={this.handleOnChange} value={this.state.content} />
                    <br/><br/>
                    <label>Parameter 3:</label>
                    &nbsp;&nbsp;
                    <input type="textbox" id="parameter3" onChange={this.handleOnChange} value={this.state.content} />
                    <br/><br/>
                    </div>
                    
                    <div class="input-field col s6">
                        <input id="email" type="email" class="validate" />
                        <label class="active" for="email">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                    

                  </form>
                  <br/>
                  <br/>
              </div>
      
            </div>
        );
    }
 
  }
  
  export default Params;