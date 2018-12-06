import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Results from './Results'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      collection: [],

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getData = this.getData.bind(this)
  }

  handleChange = (event) => {
    console.log('typing', event.target.value)
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getData(this.state.name)
    event.target.reset()
  }

  getData = (content) => {

    return axios.get('/api/' + content)
      .then(res => res.data)
      .then(results => this.setState({ collection: results.data }))
  }





  componentDidMount() {
    M.AutoInit();
  }

  render() {

    return (
      <div className="App">
        <div className="landing-page container">
          <div className="header">
            <h1 className="main-title">giphy world</h1>
            <h3 className="subtitle">the best gifs in giphy</h3>
          </div>
          <div className="body container ">
            <div class="row ">
              <div className="filter-buttons flex-center flex-row">
                <a class="waves-effect waves-light btn-small">Y</a>
                <a class="waves-effect waves-light btn-small">G</a>
                <a class="waves-effect waves-light btn-small">PG</a>
                <a class="waves-effect waves-light btn-small">PG-13</a>
                <a class="waves-effect waves-light btn-small">R</a>
              </div>
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
        <div className="results container ">
          <div className="row">
            <div className="input-field col s2">
              <select defaultValue="">
                <option value="" disabled >SORT ME</option>
                <option value="abc">A - Z</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>

        </div>

        <Results collection={this.state.collection} />
      </div >
    );
  }
}

export default App;
