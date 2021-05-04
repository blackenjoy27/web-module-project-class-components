import React from "react";


class TodoForm extends React.Component {

    constructor(){
        super();
        this.state ={
            input: ""
        }
    }

    updateInput = evt =>{
        this.setState({input:evt.target.value});
    }

    submit = evt =>{
        evt.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({input:""});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input value={this.state.input} type="text" placeholder="...todo" onChange={this.updateInput}/>
                    <button>Add Todo</button>
                </form>
                <button onClick={this.props.clearComplete}>Clear Completed</button>
            </div>

        )
    }
}

export default TodoForm;