import React, { Component } from 'react';
import logo from './logo.svg';
import Check from './components/Check';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  changeHandler = event => {
    this.setState({
      checked: event.target.checked,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="App-intro">

          <h3>Checkbox</h3>

          <Check
            checked={ this.state.checked }
            onChange={ this.changeHandler }>

            <pre>This is a fancy label wrapped in a pre tag</pre>
          </Check>

        </section>
      </div>
    );
  }
}

export default App;
