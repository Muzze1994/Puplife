import React, { Component } from 'react';
import CreateForumPost from './Create-forum-post';
import ForumPost from './Forum-post';
import Login from '../Login';


class Forum extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (localStorage.length > 0) {
            return (
                <div>
                    <CreateForumPost />
                    <ForumPost />
                </div>
            )
        }
        else {
            return (
                <Login message={"Please log in to see forum posts"} />
            )
        }
    }
}

export default Forum



