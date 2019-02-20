import React, { Component } from 'react';
import db from '../Services/DB/Firebase'
import Edit from './Edit/Edit'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleGetClick = this.handleGetClick.bind(this);
    this.handleSetClick = this.handleSetClick.bind(this);

    this.state = {
      dbGetText: 'initial'
    }
  }
  handleGetClick() {
    db.get().then(result => this.setState({dbGetText: result}))
  }
  handleSetClick() {
    db.put();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.dbGetText}
          <input></input>
          <button onClick={this.handleGetClick}>Get</button>
          <button onClick={this.handleSetClick}>Set</button>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Test
          </a>
        </header>
      </div>
    );
  }
}

export default App;
