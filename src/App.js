import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import { loadInitialData } from './actions/shared'
import { LoadingBar } from 'react-redux-loading'
import Login from './components/Login'
import Poll from './components/Poll'
import LeaderBoard from './components/LeaderBoard'
import Home from './components/Home'
import Nav from './components/Nav'
import { Route } from 'react-router-dom'
import NewPoll from './components/NewPoll'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadInitialData())
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {!this.props.loggedIn ? <Login /> :
          this.props.loading ? 'loading...' : (
            <>
              <Nav />

              <Route path='/' exact component={Home} />
              <Route path='/new' component={NewPoll} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/polls/:pollId' component={Poll} />
            </>
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, polls, authedUser }, props) => ({
  loading: Object.keys(users).length === 0 || Object.keys(polls).length === 0,
  loggedIn: authedUser !== null
})

export default connect(mapStateToProps)(App);
