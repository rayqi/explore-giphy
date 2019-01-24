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
      // name: "",
      collection: [],
      searched: false,
      // sorted: false
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange = (event) => {
  //   this.setState({ name: event.target.value })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.getData(this.state.name)
  //   event.target.reset()
  // }

  // handleClick = () => {
  //   this.setState({ sorted: !this.state.sorted })
  // }

  getData = (content) => {
    return axios.get(`/api/${content}`)
      .then(res => res.data)
      .then(results => this.setState({ collection: results.data, searched: true }))
  }

  getTrending = () => {
    return axios.get('/api/trending')
      .then(res => res.data)
      .then(results => this.setState({ collection: results.data }))
  }

  getSearching = () => {
    this.setState({ searched: true })
  }




  //On each filter handler, we are adding the specific value (rating) to the array.
  //The array can hold several ratings and will filter the content accordingly.
  // updateRatings = (event) => {
  //   console.log('event.target.value', event.target.value, this.state.ratings)
  //   if (!this.state.ratings.includes(event.target.value)) {
  //     this.setState({ ratings: [...this.state.ratings, event.target.value] })
  //   } else {
  //     this.setState({
  //       ratings: this.state.ratings.filter((elem) => elem !== event.target.value)
  //     })
  //   }
  // }


  //Once the landing page mounts, we will make a call to trending gifs under the search.
  componentDidMount() {
    this.getTrending()
  }

  //Passed down results to Results Component
  render() {
    console.log('state in App.js', this.state)
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
