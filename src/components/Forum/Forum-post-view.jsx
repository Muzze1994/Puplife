import React, { Component } from 'react';
import { Delete } from '../../api/Delete';
import { Link } from 'react-router-dom';
import ConfirmationBtn from '../Confirmation-button';

class ForumPostView extends Component {
    constructor(props) {
        super(props);

        this.deleteForumPost = this.deleteForumPost.bind(this);
    }

    deleteForumPost(e) {
        e.preventDefault();
        const id = e.target.id;

        Delete(id)
    }

    render() {

        return (
            <div>
                <div className="card mb-2">
                    <div className="card-body p-2 p-sm-3">
                        <div className="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="mr-3 rounded-circle" width="50" alt="User" /></a>
                            <div className="media-body">
                                <h6>
                                    <Link to={`/post/${this.props.post.id}`} >
                                        <a href="#" data-toggle="collapse" data-target=".forum-content" className="text-body">{this.props.post.title}</a>
                                    </Link>
                                </h6>
                                <p className="text-secondary">
                                    {this.props.post.text}
                                </p>
                                <p className="text-muted">{this.props.post.poster} posted <span className="text-secondary font-weight-bold">{this.props.post.postDate}</span></p>
                                <div className="text-muted small text-center align-self-center">
                                    <span className="d-none d-sm-inline-block"><i className="far fa-eye"></i> 19</span>
                                    <span><i className="far fa-comment ml-2"></i> 3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ConfirmationBtn
                        message={"delete"}
                        id={this.props.post.id}
                        dialogTitle={"Remove forum post"}
                        dialogDescr={"Are you sure?"}
                        myFunction={this.deleteForumPost}
                        disagree={"No"}
                        agree={"Yes"}
                    />
                </div>
            </div>
        )
    }
}

export default ForumPostView

