import React, { Component } from 'react';
import Caller from '../business/Logic.js';
import TodoView from './Todo-view.js';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserInput: '',
            Todos: []
        };
    }

    handleChange = event => {
        this.setState({ UserInput: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        Caller.get(this.state.UserInput, {})
            .then(res => {
                if (Array.isArray(res.data)) {
                    const Todos = res.data;
                    console.log(Todos);
                    this.setState({ Todos })
                }
                else {
                    this.setState({
                        Todos: [res.data]
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {

        const Todos = this.state.Todos;
        return (
            <div>
                <p>Type a number for a specific todo or leave blank to see every todo in the list. (1-200)</p>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            User ID:
            <input type="number" value={this.state.UserInput} onChange={this.handleChange} />
                        </label>
                        <button type="submit">Get one todo</button>
                    </form>
                </div>

                <div>
                    {Todos.map(todos =>
                        <TodoView key={todos.id} todos={todos} />

                    )}
                </div>
            </div>
        )


    }
}

export default Todos