import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      collection: []
    }
  }
  render() {
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
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
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
    );
  }
}

export default App;
