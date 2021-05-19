import React, { Component } from 'react';
import Caller from '../../api/Caller.js'
import ForumPostView from './Forum-post-view.js';

class ForumDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Post: []
        }
    }

    getBlogPost() {
        Caller.get(this.props.match.params.id, {})
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

        this.getBlogPost()
    }

    static getDerivedStateFromProps(nextProps, previousProps) {
        return null;
    }

    render() {

        console.log(this.state.Post)
        const id = this.props.match.params.id;
        if (this.state.Post.length == 0) {
            return null
        }

        return (
            <div>
                <ForumPostView post={this.state.Post[0]} />
            </div>
        )
    }
}

export default ForumDetail