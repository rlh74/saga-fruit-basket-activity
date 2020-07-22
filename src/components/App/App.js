import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import FruitList from '../FruitList/FruitList.js';
import FruitSelector from '../FruitSelector/FruitSelector.js';
import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount(){
    this.props.dispatch({type: "FETCH_FRUIT"});
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* FruitSelector dispatches actions to update the Redux store */}
        <FruitSelector />
        {/* FruitList will connect to the store for the list of fruit */}
        <FruitList />
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
