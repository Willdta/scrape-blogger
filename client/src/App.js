import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';

class App extends Component {
  // componentDidMount() {
  //   fetch("/test/testData")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;
