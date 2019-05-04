import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Posts extends Component {
  state = {
    posts: undefined
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
      .catch(error => console.log(error));
  }

  render() {
    const { posts } = this.state;
    if (!posts) {
      return null;
    }

    return (
      <div>
        {posts.map(article => (
          <div key={article.id}>
            <h2>
              <Link to={`/posts/${article.id}`}>{article.title}</Link>
            </h2>
            <p>
              {article.body}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
