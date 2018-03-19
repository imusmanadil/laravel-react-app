import React, { Component } from 'react';
import {render} from 'react-dom';
import fetch from 'isomorphic-fetch';

class CountryList extends  Component {
    constructor(props){
        super(props);
        this.state = {
            countryNames : [],
            loading : false
        }
    }

    componentDidMount(){
        this.setState({
            loading : true
        });
        fetch('https://restcountries.eu/rest/v1/all')
        .then(response => response.json())
        .then(json => json.map(country => country.name))
        .then(countryNames => this.setState({
            countryNames,
            loading : false
        }))
    }

    render(){
        const {countryNames,loading} = this.state;
        return (loading) ?
            <div>Loading country Names ...</div> : 
            (countryNames.length === 0) ?
            <div>No country in the list</div>:
            <ul>
                {countryNames.map((n,i)=>(<li key={i} >{n}</li>))}
            </ul>
    }
}

render(<CountryList></CountryList>,document.getElementById('root'));