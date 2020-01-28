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


class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: local
    }
  }

  selectNewsType = (type) => {
    switch (type) {
      case 'entertainment':
        this.setState({ articles: entertainment })
        break;
      case 'health':
        this.setState({ articles: health })
        break;
      case 'science':
        this.setState({ articles: science })
        break;
      case 'technology':
        this.setState({ articles: technology })
        break;
      default:
        this.setState({ articles: local })
        break;
    }
  }

  render () {
    return (
      <div className="app">
        <Menu selectNewsType={this.selectNewsType} />
        <NewsContainer key="1" articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
