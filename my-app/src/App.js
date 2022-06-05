import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="123123" sub="subsubsubsub"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
