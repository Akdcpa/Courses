import React from 'react';
import logo from './logo.svg';
import './App.css'; 

import{
  AppBar
} from './components/index'
import {
  Main
} from './screens/index'
 
class App extends React.Component {
  render() { 
    return (
      <div>
        <AppBar/> 
        <Main/>
      </div>
    );
  }
} 

export default App;
