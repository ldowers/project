// src/components/App/index.js
// import React, { PropTypes, Component } from 'react';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Card from '../Card';
// import Navbar from '../Navbar';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  // render() {
  //   const { className, ...props } = this.props;
  //   return (
  //     <div className={classnames('App', className)} {...props}>
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to IOT Device Profiler</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to IOT Device Profiler</h2>
        </div>
        <div className="App-cards">
          <Card name="Internet Enabled Printer" behavior="Bad" suspected="None" />
          <Card name="Chromecast" behavior="Normal" suspected="None" />
          <Card name="Belkin Branded Bulb" behavior="Normal" suspected="None" />
          <Card name="Amazon Dash Button" behavior="Normal" suspected="None" />
          <Card name="Belkin Branded Smart Switch" behavior="Normal" suspected="None" />
        </div>
      </div>
    );
  }
}

export default App;
