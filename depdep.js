import React, { Component, PropTypes } from 'react';

class Depdep extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'demonstrating recursive includes with the Depdep component'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
      </div>
    );
  }
}

export default Depdep;
