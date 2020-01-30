import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
    constructor() {
      super()
      this.state = {
        searchTerm: ''
      }
    }

    updateSearchTerm = event => {
        this.setState({searchTerm: event.target.value})
    }

    runSearch = event => {
        event.preventDefault();
        this.props.searchCards(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }
    
    render() {
    return (
        <form className="searchArea">
            <input
                type="text"
                name="search"
                placeholder="Search for news articles here."
                value={this.state.searchTerm}
                onChange={this.updateSearchTerm}
            />
            <button onClick={this.runSearch}>Search</button>
        </form>
    )
    }
}

export default SearchForm;