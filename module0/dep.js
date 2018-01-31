import React, { Component, PropTypes } from 'react';

//import Depdep from './depdep';
//<Depdep />


class Dep extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep(),
      h2 = 'the dep component'
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


export default Dep;
