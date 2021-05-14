import React, { Component } from 'react';
import CreateForumPost from './Create-forum-post.js';
import ForumPost from './Forum-post.js';
import Login from '../Login.js';
import ErrorBoundary from '../ErrorBoundary.js';

class Forum extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (localStorage.length > 0) {
            return (
                <div>
                    <Login />
                    <ErrorBoundary>
                        <CreateForumPost />
                    </ErrorBoundary>
                    <ForumPost />
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


