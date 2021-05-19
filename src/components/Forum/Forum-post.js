import React, { Component } from 'react';
import Caller from '../../api/Caller.js';
import ForumPostView from './Forum-post-view.js';

class ForumPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserInput: '',
            Post: []
        };

        this.getAllBlogPosts = this.getAllBlogPosts.bind(this);
    }

    handleChange = event => {
        this.setState({ UserInput: event.target.value });
    }

    getAllBlogPosts() {
        Caller.get(this.state.UserInput, {})
            .then(res => {
                if (Array.isArray(res.data)) {
                    const Post = res.data;
                    console.log(Post);
                    this.setState({ Post })
                }
                else {
                    this.setState({
                        Post: [res.data]
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        this.getAllBlogPosts();
    }

    render() {

        const Post = this.state.Post;

        return (
            <div>
                <br></br>
                <div>
                    {Post.map(post =>
                        <ForumPostView key={post.id} post={post} />
                    )}
                </div>

            </div>
        )


    }
}

export default ForumPost