import React, { Component } from 'react';

class ChuckNorrisApi extends Component {
  constructor() {
    super();
    this.state = { randomJoke: '' };
  }

  componentDidMount() {
    fetch(`http://api.icndb.com/jokes/random`)
      .then(response => response.json())
      .then(json => {
        console.log(json.value);
        this.setState({
          randomJoke: json.value
        })
      })
  }

  render() {
    return(
      <div className="chuck-norris-api">
        <p>{this.state.randomJoke.joke}</p>
      </div>
    );
  }
}

export default ChuckNorrisApi;
