import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PostDetails extends Component {
  state = {
    post: undefined,
    comments: undefined
  };

  componentDidMount() {
    const { match } = this.props;
    if (match && match.params.id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        .then(response => response.json())
        .then(post => this.setState({ post }))
        .then(() =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${
              match.params.id
            }`
          )
            .then(response => response.json())
            .then(comments => this.setState({ comments }))
        )
        .catch(error => console.log(error));
    }
    
  }

  render() {
    const { post } = this.state;
    if (!post) {
      return null;
    }

    console.log(post)

    return <div key={post.id}>
    <h2>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </h2>
    <p>
      {post.body}
    </p>
  </div>;
  }
}
