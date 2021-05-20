import React, { Component } from 'react';
import { Post } from '../../api/Post';
import ThemableP from '../Context/ThemableP';

class CreateForumPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forumPostAdded: false,
            title: '',
            text: '',
            poster: '',
            postDate: ''
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

        var current = new Date();
        var lsUser = localStorage.getItem('user');

        const newForumPost = {
            title: this.state.title,
            text: this.state.text,
            poster: lsUser,
            postDate: current.toLocaleTimeString()
        }
        this.setState({
            forumPostAdded: true,
            title: '',
            text: '',
            poster: '',
            postDate: ''
        });
        console.log(this.state.Post);
        console.log(new Date())

        Post(newForumPost);
    }

    render() {

        return (
            <div>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">
                            <ThemableP>Title:</ThemableP>
            <input className="input is-primary" name="title" placeholder="Enter title..." value={this.state.title} onChange={this.handleChange} required />
                        </label>
                    </div>

                    <div className="field">
                        <label className="label">
                        <ThemableP>Text:</ThemableP>
            <textarea className="textarea is-primary" name="text" placeholder="Enter text..." value={this.state.text} onChange={this.handleChange} required />
                        </label>
                    </div>

                    <input type="submit" value="Create forum post" />
                </form>

            </div>
        )

    }
}

export default CreateForumPost