import React, { Component, PropTypes } from 'react';

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep(),
      h2 = 'any more questions?'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
	<h1>there was an image here</h1>
      </div>
    );
  }
}

export default RandomTest;

