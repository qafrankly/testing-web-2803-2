import React, { Component, PropTypes } from 'react';

class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep(),
      h2 = 'this is a change kjh'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
	<img src='http://www.kinocast.net/wp-content/uploads/2017/06/98bwhd1.jpg'/>
      </div>
    );
  }
}

export default RandomTest;

