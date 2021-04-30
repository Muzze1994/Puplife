import React, { Component } from 'react';
import CreateForumPost from './Create-forum-post.js';
import ForumPost from './Forum-post.js';
import Login from './Login.js';

class Forum extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Login />
                <CreateForumPost/>
            </div>
        )
    }
}

export default Forum



