import React, { Component } from 'react';

class ForumPost extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
                <div className="ForumTitleDiv">
                    <h1> Title: {this.props.post.title}</h1>
                </div>
                <div className="ForumTextDiv">
                    <p>Text: {this.props.post.text}</p>
                </div>

            </div>
        )
    }
}

export default ForumPost