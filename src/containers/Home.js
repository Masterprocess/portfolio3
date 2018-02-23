import React, { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';

export default class Home extends Component {
	static propTypes = {};

  render() {
    return (
			<div>
				<h1>Welcome Home!</h1>
				<img src={require('../assets/celebrate.jpg')} alt="Face of Chris"/>
			</div>	
    );
  }
}
