import React, { Component } from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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

        const filterRobots = this.state.robots.filter( robot => (
            robot.name.toLowerCase()
            .includes(this.state.searchField.toLowerCase())
        ));

        if (this.state.robots.length === 0){

            return <h1 className="tc">Loading...</h1>
            
        }else{

            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots={filterRobots}/>
                    </Scroll>
                </div>
            )
            
        }
    };

};

export default App;