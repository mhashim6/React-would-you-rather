import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSummary from './UserSummary'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        return (
            <div className='leader-board'>
                <ul>
                    {Object.keys(users).map(id => (
                        <li key={id}>
                            <UserSummary id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    users
})

export default connect(mapStateToProps)(LeaderBoard)