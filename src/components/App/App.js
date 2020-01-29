import React, { Component } from 'react';
//is there a way to destructure data file imports?
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
const allNews = {local, entertainment, health, science, technology}

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: local
    }
  }

  selectNewsType = (type) => {
    this.setState({articles: allNews[type]})
  }

  render () {
    return (
      <div className="app">
        <Menu selectNewsType={this.selectNewsType} />
        <NewsContainer articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
