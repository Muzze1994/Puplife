import React, { Component } from 'react';
import ForumPostView from './Forum-post-view';
import { getAllForumPosts } from '../../api/Get-all-forum-posts';

class ForumPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserInput: '',
            Post: []
        };
    }

    handleChange = event => {
        this.setState({ UserInput: event.target.value });
    }

    componentDidMount() {
        getAllForumPosts()
            .then(res => {
                this.setState({ Post: res.data })
            })
            
    }

    render() {

        const Post = this.state.Post;

        return (
            <div>
                <br></br>
                <div className="postDiv">
                    {Post.map(post =>
                        <ForumPostView key={post.id} post={post}/>
                    )}
                </div>

            </div>
        )


    }
}

export default ForumPost