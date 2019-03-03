import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Results from './Results'
import Header from './Header';
import Trending from './Trending';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      searched: false,
    }
  }


  getData = (content) => {
    return axios.get(`/api/${content}`)
      .then(res => res.data)
      .then(results => this.setState({ collection: results.data, searched: true }))
  }

  getTrending = () => {
    return axios.get(`/api/trending`)
      .then(res => res.data)
      .then(results => this.setState({ collection: results.data }))
  }

  getSearching = () => {
    this.setState({ searched: true })
  }

  //Once the landing page mounts, we will make a call to trending gifs under the search.
  componentDidMount() {
    this.getTrending()
  }

  //Passed down results to Results Component
  render() {
    return (
      <div className="App">
        <div className="landing-page container">
          <Header />
          <Search getData={this.getData} getSearching={this.getSearching} updateRatings={this.updateRatings} />
        </div>
        {!this.state.searched ? <Trending trending={this.state.collection} /> : <Results collection={this.state.collection} />}
      </div >
    );
  }
}

export default App;
