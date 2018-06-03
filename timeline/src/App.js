import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import './App.css';
import Post from './components/Post';

const BASE_URL = 'https://api.myjson.com/bins/u0wci';

class App extends Component {
  state = { posts: [] };

  componentWillMount() {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(responseData => this.setState({ posts: responseData }));
  }

  renderPosts() {
    return this.state.posts.map(post => <Post key={post.id} data={post} />);
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#dummy">
            CatsConnect
          </a>
        </nav>
        <div className="container">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="panel panel-info">
              <div className="panel-body">{this.renderPosts()}</div>
            </div>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}

export default App;
