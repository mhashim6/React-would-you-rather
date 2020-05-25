import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeUser } from '../actions/authedUser'

const Nav = ({ user, dispatch, history }) => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Poll
                     </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leader Board
                     </NavLink>
                </li>
                <li>
                    <span>Welcome, <i>{user.name}!</i> – </span>
                    <button onClick={() => {
                        dispatch(changeUser(null))
                        history.push('/')
                    }}>
                        Logout
                     </button>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ users, authedUser }, props) => ({
    user: users[authedUser]
})

export default withRouter(connect(mapStateToProps)(Nav))