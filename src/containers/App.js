import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Header from '../components/Header';


import { setSearchField, requestRobots } from  '../actions';

// what piece of state I need
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

// what props I need to dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount(){

        this.props.onRequestRobots()

    }

    render(){

        const { robots, isPending, searchField, onSearchChange } = this.props;

        const filterRobots = robots.filter( robot => (
            robot.name.toLowerCase()
            .includes(searchField.toLowerCase())
        ));

       return isPending ?
       
            <h1 className="tc">Loading...</h1> :

        (
            <div className="tc">
                <Header/>
                <SearchBox onSearchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
            
        
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);