import React, { Component } from 'react';
import CreateForumPost from './Create-forum-post.js';
import ForumPosts from './Forum-posts.js';
import Login from '../Login.js';

class Forum extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        if (localStorage.length > 0) {
            return (
                <div>
                    <Login />
                    <CreateForumPost />
                    <ForumPosts />
                </div>
            )
        }
        else {
            return (
                <Login />
            )
        }

    }
}

export default Forum



