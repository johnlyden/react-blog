import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul classNmae="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  
  return { posts: state.posts };
}

// gives access to this.props.fetchPosts inside of the class
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);