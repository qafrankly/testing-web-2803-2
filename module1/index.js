import React, { Component, PropTypes } from 'react';

//import RandomQwerty from 'axelbrock/qwerty';
//<RandomQwerty />

import _ from 'lodash';

//import Dep from './dep';
//<Dep />

const a = [1];
const b = [2,3];
const c = 'test';

const otherarray = _.concat(a, b)

class ModuleOne extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      //h1 = dep(),
      h2 = 'Hi TL welcome to Custom Modules! :)'
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>This is module1. dep test:</h2>
	<h2>{otherarray[2]}</h2>
      </div>
    );
  }
}

export default ModuleOne;

