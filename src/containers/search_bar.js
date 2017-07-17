import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
        //binding the input change action to the searchbar and replace on input change.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({ term:event.target.value });
    }

    onFormSubmit(event){
        //blocks the user to type once clicked "enter" while on the input bar
        event.preventDefault();
        //will call an action creator 
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecase in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);