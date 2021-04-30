import React, { Component } from 'react';

class TodoView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div>
                    <p>{this.props.todos.id}</p>
                    <p>{this.props.todos.title}</p>
                    <p>{this.props.todos.completed ? 'nej' : 'ja'}</p>
                </div>
            </li>

        )
    }
}

export default TodoView