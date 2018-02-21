import React, { Component, PropTypes } from 'react';

import otherdep from './otherdep';
import dep from '../dep';

class ModuleOne extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'Hi TL welcome to Custom Modules! :)'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>This is mod1</h2>
	<h3>dep: {dep(1)} </h3>
	<h3>dep: {dep(1)} </h3>
	<h2>testing ModuleOne</h2>
      </div>
    );
  }
}

export default ModuleOne;

