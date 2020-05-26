import React, {Component} from 'react';

class Params extends Component {
    
    state = {
        icon_link1 : '',
        icon_link2 : '',
        icon_link3 : '',
        icon_link4 : '',
        icon_link5 : '',
        icon_link6 : '',
        match : '',

        icon_child1_firstname : '',
        icon_child1_lastname : '',
        icon_age1 : '',
        icon_child2_firstname : '',
        icon_child2_lastname : '',
        icon_age2 : '',
        icon_child3_firstname : '',
        icon_child3_lastname : '',
        icon_age3 : '',

        delete : ''
    }

    updateParams = (id, value) => {
/* 
        let paramsList = this.state.filter(param => {
          if (todo.id === id)
            return false;
          else
            return todo;
        })
    
        this.setState({
            paramsList 
        }) */
      }


    handleOnChange = (e) => {
    
        console.log(e.target.id)

        // sync the state with the textbox value
        this.updateParams(e.target.id, e.target.value)
    }

    handleOnSubmit = (e) => {

        e.preventDefault();

        console.log("Starting Submit only to dom logs for this sample")
        //console.log(document.getElementById("todo_to_add").value);

        // add the current state content to todos
        //this.props.addTodo(this.state.content);

        // clear state
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="Params container center">
                <h1 className="header center orange-text">Parameters</h1>
              
                <form onSubmit={this.handleOnSubmit}>

                    <div className="card">
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab"><a href="#step1">Step 1</a></li>
                                <li className="tab"><a className="active" href="#step2">Step 2</a></li>
                                <li className="tab"><a href="#step3">Step 3</a></li>
                            </ul>
                        </div>

                        <div id="step1">

                            <div className="card blue-grey darken-1">

                                <div className="card-content white-text">

                                    <span className="card-title">Step 1</span>
                                    <p>Step description, describe what's the goal of the parameters</p>
                            
                                    <br/>

                                    <div className="row left-align">
                        
                                        <div className="col s12">
                                        
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link1" type="url" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_link1">URL 1</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link2" type="url" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_link2">URL 2</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link3" type="url" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_link3">URL 3</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link4" type="url" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_link4">URL 4</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link5" type="url" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_link5">URL 5</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link6" type="url" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_link6">URL 6</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <div className="switch">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <label className="active" htmlFor="match">Match:</label>
                                                        <br/>
                                                        <i className="material-icons prefix">search</i>
                                                        <label>
                                                        Off
                                                        <input id="match" type="checkbox" defaultChecked />
                                                        <span className="lever"></span>
                                                        On
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="step2">

                            <div className="card blue-grey darken-1">

                                <div className="card-content white-text">

                                    <span className="card-title">Step 2</span>
                                    <p>Step description, describe what's the goal of the parameters</p>
                            
                                    <br/>

                                    <div className="row left-align">
                        
                                        <div className="col s12">
                                        
                                            <div className="row">
                                                <div className="input-field col s2">
                                                    <label>Child 1:</label>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child1_firstname" type="text" className="validate" />
                                                    <label htmlFor="icon_child1_firstname">First Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child1_lastname" type="text" className="validate" />
                                                    <label htmlFor="icon_child1_lastname">Last Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">access_time</i>
                                                    <input id="icon_age1" type="number" min="1" max="100" className="validate" />
                                                    <label htmlFor="icon_age1">AGE</label>
                                                    <span className="helper-text" data-error="between 1 to 100 only" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s2">
                                                    <label>Child 2:</label>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child2_firstname" type="text" className="validate" />
                                                    <label htmlFor="icon_child2_firstname">First Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child2_lastname" type="text" className="validate" />
                                                    <label htmlFor="icon_child2_lastname">Last Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">access_time</i>
                                                    <input id="icon_age2" type="number" min="1" max="100" className="validate" />
                                                    <label htmlFor="icon_age2">AGE</label>
                                                    <span className="helper-text" data-error="between 1 to 100 only" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s2">
                                                    <label>Child 3:</label>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child3_firstname" type="text" className="validate" />
                                                    <label htmlFor="icon_child3_firstname">First Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child3_lastname" type="text" className="validate" />
                                                    <label htmlFor="icon_child3_lastname">Last Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">access_time</i>
                                                    <input id="icon_age3" type="number" min="1" max="100" className="validate" />
                                                    <label htmlFor="icon_age3">AGE</label>
                                                    <span className="helper-text" data-error="between 1 to 100 only" data-success=""></span>
                                                </div>
                                            </div>


                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="step3">

                            <div className="card blue-grey darken-1">

                                <div className="card-content white-text">

                                    <span className="card-title">Step 3</span>
                                    <p>Step description, describe what's the goal of the parameters</p>
                            
                                    <br/>

                                    <div className="row left-align">
                        
                                        <div className="col s12">
                                                                                    
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <div className="switch">
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <label className="active" htmlFor="match">Delete:</label>
                                                        <br/>
                                                        <i className="material-icons prefix">delete_forever</i>
                                                        <label>
                                                        Off
                                                        <input id="delete" type="checkbox" defaultChecked />
                                                        <span className="lever"></span>
                                                        On
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    
                    </div>

                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>

                </form>
        
                <br/><br/>

            </div>
        );
    }
 
  }
  
  export default Params;