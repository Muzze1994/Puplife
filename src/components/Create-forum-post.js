import React, { Component } from 'react';
import ForumPost from './Forum-post.js';

class CreateForumPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            Post: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            Post: [{
                title: this.state.title,
                text: this.state.text
            }]
        });
        console.log(this.state.Post);

    }

    render() {

        const Post = this.state.Post;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className="ForumTitleDiv">
                            Title:
            <input name="title" value={this.state.title} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="ForumTextDiv">
                        <label>
                            Text:
            <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                        </label>
                    </div>

                    <input type="submit" value="Create forum post" />
                </form>
                {Post.map(post =>
                    <ForumPost key={post.title} post={post} />
                )}
            </div>
        )

    }
}

export default CreateForumPost