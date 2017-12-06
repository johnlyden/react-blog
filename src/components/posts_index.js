import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// gives access to this.props.fetchPosts inside of the class
export default connect(null, { fetchPosts })(PostsIndex);