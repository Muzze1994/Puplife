import React, { Component } from 'react';
import Caller from '../../business/Logic.js';
import ForumPostView from './Forum-post-view.js';

class ForumPosts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserInput: '',
            Posts: []
        };
    }

    handleChange = event => {
        this.setState({ UserInput: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        Caller.get(this.state.UserInput, {})
            .then(res => {
                if (Array.isArray(res.data)) {
                    const Posts = res.data;
                    console.log(Posts);
                    this.setState({ Posts })
                }
                else {
                    this.setState({
                        Posts: [res.data]
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            });

    }


    render() {

        const Posts = this.state.Posts;
        
        return (
            <div>
                <br></br>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit">Get all blog posts</button>
                    </form>
                </div>

                <div>
                    {Posts.map(posts =>
                        <ForumPostView key={posts.id} posts={posts} />

                    )}
                </div>

            </div>
        )


    }
}

export default ForumPosts