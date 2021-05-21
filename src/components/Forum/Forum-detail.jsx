import React, { Component } from "react";
import ForumPostView from "./Forum-post-view";
import { getOneForumPost } from "../../api/Get-one-forum-post.js";

class ForumDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Post: [],
    };
  }

  componentDidMount() {
    getOneForumPost(this.props.match.params.id).then((res) => {
      if (Array.isArray(res.data)) {
        const Post = res.data;
        console.log(Post);
        this.setState({ Post });
      } else {
        this.setState({
          Post: [res.data],
        });
      }
    });
  }

  static getDerivedStateFromProps(nextProps, previousProps) {
    return null;
  }

  render() {
    console.log(this.state.Post);
    const id = this.props.match.params.id;
    if (this.state.Post.length == 0) {
      return null;
    }

    return (
      <div>
        <ForumPostView post={this.state.Post[0]} />
        <div className="card mb-2">
          <div className="card-body p-2 p-sm-3">
            <div className="media forum-item">
              <a href="#" data-toggle="collapse" data-target=".forum-content">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  className="mr-3 rounded-circle"
                  width="50"
                  alt="User"
                />
              </a>
              <div className="media-body">
                <h6>
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target=".forum-content"
                    className="text-body"
                  >
                    Reply
                  </a>
                </h6>
                <p className="text-secondary">Hey this is a reply</p>
                <p className="text-muted">
                  Anon posted{" "}
                  <span className="text-secondary font-weight-bold">
                    on a random date
                  </span>
                </p>
                <div className="text-muted small text-center align-self-center">
                  <span className="d-none d-sm-inline-block">
                    <i className="far fa-eye"></i> 19
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForumDetail;
