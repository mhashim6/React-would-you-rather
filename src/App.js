import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import { loadInitialData } from './actions/shared';
import { LoadingBar } from 'react-redux-loading';
import Login from './components/Login';
import Poll from './components/Poll';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadInitialData())
  }

  render() {
    return (
      <div className="App">
        {/* <LoadingBar /> */}
        <Poll pollId='8xf0y6ziyjabvozdd253nd' />
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }, props) => ({
  // loading: authedUser === null
})

export default connect(mapStateToProps)(App);
