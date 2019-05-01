import React, { Component } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component{

    state = {
        robots: [],
        searchField: ''
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( data => this.setState( { robots: data }))
        .catch(error => console.log('Looks like there was a problem', error))

    }

    onSearchChange = (event) => {

        this.setState( { searchField: event.target.value});
    
    }

    render(){

        const {robots, searchField } = this.state;

        const filterRobots = robots.filter( robot => (
            robot.name.toLowerCase()
            .includes(searchField.toLowerCase())
        ));

       return !robots.length ?
       
            <h1 className="tc">Loading...</h1> :

        (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
            
        
    };

};

export default App;