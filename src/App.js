import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import Banner from './home-page/banner';
import HomeContent from './home-page/contents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner />
        <HomeContent />
      </div>
    );
  }
}

export default App;
