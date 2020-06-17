import React, {Component} from 'react';

class Params extends Component {
    
    state = {
        params: [
            { id: 'icon_link1', value: 'https://www.google.com'},
            { id: 'icon_link2', value: 'https://editions.cnn.com'},
            { id: 'icon_link3', value: 'https://www.msn.com'},
            { id: 'icon_link4', value: ''},
            { id: 'icon_link5', value: ''},
            { id: 'icon_link6', value: ''},
            { id: 'match', value: 'on'},

            { id: 'icon_child1_firstname', value: 'Rami'},
            { id: 'icon_child1_lastname', value: 'Greenfield'},
            { id: 'icon_age1', value: '6'},
            { id: 'icon_child2_firstname', value: 'Yael'},
            { id: 'icon_child2_lastname', value: 'Greenfield'},
            { id: 'icon_age2', value: '3'},
            { id: 'icon_child3_firstname', value: 'Doron'},
            { id: 'icon_child3_lastname', value: 'Greenfield'},
            { id: 'icon_age3', value: '1'},
            
            { id: 'delete', value: 'on'}
        ]
    }

    componentDidMount() {
        console.log("Did mounted");
        this.handleOnLoad();
    }

    updateParams = (id, value) => {

        // looping/foreach on the params
        let paramsList = this.state.params.filter(param => {
            if (param.id === id)
            {
                // updating only the defined param

                if (id === 'match' || id === 'delete')
                {
                    // switcher/toggle value to update
                    if (param.value === 'on')
                        param.value = 'off';
                    else
                        param.value = 'on';
                }
                else {
                    // regular value to update, simple textbox value
                    param.value = value;
                }

                // return the updated param to paramslist
                return param;
            }
            else
                return param;
        })

        console.log(paramsList);
    
        // upda
        this.setState({
            params: paramsList 
        })
      }


    handleOnChange = (e) => {
    
        console.log(e.target.id, e.target.value)

        // sync the state with the textbox value
        this.updateParams(e.target.id, e.target.value)
    }

    handleOnLoad = () => {

        //https://stackoverflow.com/questions/35082047/call-external-javascript-function-from-react-components

        console.log('handleOnLoad');

        // on load of params page
        // update all the default params that in the state to the form inputs
        this.state.params.map( param => {
            console.log(param);
            document.getElementById(param.id).value = param.value;
            return param;
        })
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
                                                        <label onChange={this.handleOnChange}>
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
                                                    <input id="icon_child1_firstname" type="text" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_child1_firstname">First Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child1_lastname" type="text" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_child1_lastname">Last Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">access_time</i>
                                                    <input id="icon_age1" type="number" onChange={this.handleOnChange} min="1" max="100" className="validate" />
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
                                                    <input id="icon_child2_firstname" type="text" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_child2_firstname">First Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child2_lastname" type="text" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_child2_lastname">Last Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">access_time</i>
                                                    <input id="icon_age2" type="number" onChange={this.handleOnChange} min="1" max="100" className="validate" />
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
                                                    <input id="icon_child3_firstname" type="text" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_child3_firstname">First Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">accessibility</i>
                                                    <input id="icon_child3_lastname" type="text" onChange={this.handleOnChange} className="validate" />
                                                    <label htmlFor="icon_child3_lastname">Last Name</label>
                                                    <span className="helper-text" data-error="" data-success=""></span>
                                                </div>
                                                <div className="input-field col s3">
                                                    <i className="material-icons prefix">access_time</i>
                                                    <input id="icon_age3" type="number" onChange={this.handleOnChange} min="1" max="100" className="validate" />
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
                                                        <label onChange={this.handleOnChange}>
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