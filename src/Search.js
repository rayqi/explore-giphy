import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getData(this.state.name)
    this.props.getSearching()
    event.target.reset()
  }

  render() {
    return (
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
    )
  }
}

export default Search;