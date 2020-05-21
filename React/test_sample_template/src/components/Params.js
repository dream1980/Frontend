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
                <h1 className="header center orange-text">Parameters</h1>
              
                <form>

                    <div class="card">
                        <div class="card-tabs">
                            <ul class="tabs tabs-fixed-width">
                                <li class="tab"><a href="#step1">Step 1</a></li>
                                <li class="tab"><a class="active" href="#step2">Step 2</a></li>
                                <li class="tab"><a href="#step3">Step 3</a></li>
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
                                                    <input id="icon_link1" type="url" className="validate" />
                                                    <label htmlFor="icon_link1">URL 1</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link2" type="url" className="validate" />
                                                    <label htmlFor="icon_link2">URL 2</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link3" type="url" className="validate" />
                                                    <label htmlFor="icon_link3">URL 3</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link4" type="url" className="validate" />
                                                    <label htmlFor="icon_link4">URL 4</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link5" type="url" className="validate" />
                                                    <label htmlFor="icon_link5">URL 5</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link6" type="url" className="validate" />
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
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link1" type="url" className="validate" />
                                                    <label htmlFor="icon_link1">URL 1</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link2" type="url" className="validate" />
                                                    <label htmlFor="icon_link2">URL 2</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link3" type="url" className="validate" />
                                                    <label htmlFor="icon_link3">URL 3</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link4" type="url" className="validate" />
                                                    <label htmlFor="icon_link4">URL 4</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link5" type="url" className="validate" />
                                                    <label htmlFor="icon_link5">URL 5</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link6" type="url" className="validate" />
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
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link1" type="url" className="validate" />
                                                    <label htmlFor="icon_link1">URL 1</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link2" type="url" className="validate" />
                                                    <label htmlFor="icon_link2">URL 2</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link3" type="url" className="validate" />
                                                    <label htmlFor="icon_link3">URL 3</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link4" type="url" className="validate" />
                                                    <label htmlFor="icon_link4">URL 4</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link5" type="url" className="validate" />
                                                    <label htmlFor="icon_link5">URL 5</label>
                                                    <span className="helper-text" data-error="wrong url, must have http or https" data-success=""></span>
                                                </div>
                                                <div className="input-field col s6">
                                                    <i className="material-icons prefix">link</i>
                                                    <input id="icon_link6" type="url" className="validate" />
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
                    
                    </div>

                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                    </button>

                </form>
        
                <br/><br/>

            </div>
        );
    }
 
  }
  
  export default Params;