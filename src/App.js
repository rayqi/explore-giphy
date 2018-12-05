import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      collection: []
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

  render() {
    let collection = this.state.collection
    let content = this.state.name
    console.log('collection', collection, 'content', content)
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <h1>giphy world</h1>
            <h3>the best gifs in giphy</h3>
          </div>
        </div>
        <div className="body container">
          <div class="row">
            <form class="col s12" onSubmit={this.handleSubmit}>
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
        <div className="results">
          {collection.length > 0 ? collection.map((gif, index) => {
            let giphy = gif.images.original.url


            return <div className="giphy-item" key={index} ><img className='giphy-image' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>

          })

            : collection.map((gif, index) => {
              console.log('gif', gif)

              let giphy = gif.images.original.url



              return <div className="giphy-item" key={index} ><img className='giphy-image' cross-origin="anonymous" title={index} src={giphy} alt="gif" ></img></div>
            })

          }
        </div>


      </div>
    );
  }
}

export default App;
