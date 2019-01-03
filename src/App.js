import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Routers  from './routes/routers';
import './App.less';
import './assets/styles/style.css'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routers />
      </HashRouter>
    );
  }
}

export default App;
