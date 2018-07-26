import React, { Component } from 'react';
import './App.css';
import TicTac from './components/TicTac'
import MadLibs from './components/MadLibs'
import PigLatin from './components/PigLatin'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/pig-latin" component={PigLatin} />
          <Route path="/mad-libs" component={MadLibs} />
          <Route path="/tic-tac-toe" component={TicTac} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
