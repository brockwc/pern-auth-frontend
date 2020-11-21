import React, { Component } from 'react';
import './App.scss';
import HomeModal from '../components/HomeModal';

class SearchForm extends Component {
    state = {
        breweries: [],
        city: '',
        show: true,
    }

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
            this.props.history.push({ 
                pathname: '/brewerylist',
                state: this.state
            });
    };
    
    handleChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleBeerSubmit = (event) => {
        event.preventDefault()
            this.props.history.push({
                pathname: '/beerList',
                state: this.state
            })
    }

    handleBeerChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    onClose = e => {
        this.props.show = false;
    };

    render() {

        return (
            <div>

                <HomeModal 
                    show={ this.state.show } 
                    onClose={this.showModal}
                />

                <div className="search">
                    <h1>Happy Brewsing!</h1>

                    <img src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="searchImg" alt="pic" />
                    <h4>Find breweries by name or location!</h4>
                    <form onSubmit={ this.handleSubmit }>
                        <input 
                        id="searchbar"
                        type="text"
                        placeholder="Find Brewery"
                        onChange={ this.handleChange}
                        value={ this.state.city }
                        />
                        <button id="searchBtn"> I need a drink! </button>
                    </form>
                    <form onSubmit={ this.handleBeerSubmit }>
                        <input 
                        id="searchbar"
                        type="text"
                        placeholder="Find Beer"
                        onChange={ this.handleBeerChange}
                        value={ this.state.category }
                        />
                        <button id="searchBtn"> Pour Me a Pint! </button>
                    </form>
                    
                </div>
            </div>
        )
    }
}
export default SearchForm;