import React, { Component } from 'react';
import ForumPostView from './Forum-post-view';
import { getAllBlogPosts } from '../../api/Get-all-blog-posts';

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
        getAllBlogPosts()
            .then(res => {
                this.setState({ Post: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        const Post = this.state.Post;

        return (
            <div>
                <br></br>
                <div>
                    {Post.map(post =>
                        <ForumPostView key={post.id} post={post}/>
                    )}
                </div>

            </div>
        )


    }
}

export default ForumPost