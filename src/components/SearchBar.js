import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.userSearch(this.state.searchTerm);
        this.setState({ searchTerm: '' });
    } 

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            // short form version of doing an event handler in one line
                            // controlled element
                            onChange={ event => this.setState({ searchTerm: event.target.value }) }
                            value={ this.state.searchTerm }
                            type="text"
                        />
                    </div>
                </form>
            </div>
        )
    }
} 

export default SearchBar;