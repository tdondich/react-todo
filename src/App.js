import classNames from 'classnames';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // Constructor to set our initial state
  constructor(props) {
    super(props);
    this.state = {
      items: [ ],
      completed: [ ]
    };
    // This is dumb. I hate react.
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }

  markCompleted(index) {
    // This is so dumb. I can't modify arrays directly in the state? Screw you react.
    this.setState((prevState, props) => {
      let completed = prevState.completed;
      completed[index] = !completed[index];
      return {
        completed: completed
      };
    });
  }

  addItem() {
    this.setState((prevState, props) => {
      return {
        items: [...prevState.items, this.state.tempInput],
        completed: [...prevState.completed, false]
      };
    });
  }

  handleChange(event) {
    this.setState({tempInput: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO List</h1>
        </header>
        <p className="App-intro">
          To get started, add an item using the form. Click on an item to toggle it as completed (Green)
        </p>
        <input value={this.state.tempInput} onChange={this.handleChange} /><button onClick={this.addItem}>Add Item</button>

        <ul>
          {this.state.items.map((item, index) => 
            <li onClick={() => this.markCompleted(index)} className={classNames({completed: this.state.completed[index]})}>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
