import React, { Component, PropTypes } from 'react';

import dep from './dep';

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep,
      h2 = 'Hi TL welcome to Custom Modules!'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>hi</h2>
	<h1>this is the demo and training session.</h1>
      </div>
    );
  }
}

export default RandomTest;

