import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Results from './Results'

let API_KEY = "tXuAFO9PLLeRDzCzFORGmlDajArwFF5a"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      collection: [],
      ratings: [],
      searched: false,
      sorted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getData(this.state.name)
    event.target.reset()
  }

  handleClick = () => {
    this.setState({ sorted: !this.state.sorted })
  }

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


  //On each filter handler, we are adding the specific value (rating) to the array.
  //The array can hold several ratings and will filter the content accordingly.
  updateRatings = (event) => {
    console.log('event.target.value', event.target.value, this.state.ratings)
    if (!this.state.ratings.includes(event.target.value)) {
      this.setState({ ratings: [...this.state.ratings, event.target.value] })
    } else {
      this.setState({
        ratings: this.state.ratings.filter((elem) => elem !== event.target.value)
      })
    }
  }


  //Once the landing page mounts, we will make a call to trending gifs under the search.
  componentDidMount() {
    this.getTrending()
  }

  //Passed down results to Results Component
  render() {
    console.log('state', this.state)
    return (
      <div className="App">
        <div className="landing-page container">
          <div className="header">
            <h1 className="main-title">GAY WORLD</h1>
            <h4 className="subtitle">the best gifs in giphy</h4>
          </div>
          <div className="body container ">
            <div class="row ">
              <form class="search-bar col s12" onSubmit={this.handleSubmit}>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" onChange={this.handleChange}></textarea>
                    <label for="textarea1">search giphy</label>
                    <button class="btn waves-effect waves-light" type="submit" name="action">EXPLORE
                    <i class="material-icons right">send</i>
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
        {this.state.searched === false ? <div></div> : <div className="results container ">
          <div className="custom-row">
            <div className="sort-button col s2">
              <a class="waves-effect waves-light btn-small" onClick={this.handleClick}>Most Recent</a>

            </div>
            <div className="filters-checklist">
              <form className="filter-list flex-row" action="#">
                <p>
                  <label className="filter-label">
                    <input type="checkbox" name="rating" value="PG-13" onChange={this.updateRatings} />
                    <span>PG-13</span>
                  </label>
                </p>
                <p>
                  <label className="filter-label">
                    <input type="checkbox" name="rating" value="PG" onChange={this.updateRatings} />
                    <span>PG</span>
                  </label>
                </p>
                <p>
                  <label className="filter-label">
                    <input type="checkbox" name="rating" value="Y" onChange={this.updateRatings} />
                    <span>Y</span>
                  </label>
                </p>
                <p>
                  <label className="filter-label">
                    <input type="checkbox" name="rating" value="G" onChange={this.updateRatings} />
                    <span>G</span>
                  </label>
                </p>
                <p>
                  <label className="filter-label">
                    <input type="checkbox" name="rating" value="R" onChange={this.updateRatings} />
                    <span>R</span>
                  </label>
                </p>
              </form>
            </div>
          </div>
        </div>
        }
        <Results collection={this.state.collection} ratings={this.state.ratings} searched={this.state.searched} sorted={this.state.sorted} />
      </div >
    );
  }
}

export default App;
