import React, { Component } from 'react';
import './App.css';
import MyRouting from './routing';
import Header from './header/header';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MyRouting />
        <Footer />
      </div>
    );
  }
}

export default App;
