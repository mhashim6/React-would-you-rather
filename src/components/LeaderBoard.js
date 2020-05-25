import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSummary from './UserSummary'

class LeaderBoard extends Component {
    render() {
        const { users } = this.props
        const score = user => users[user].questions.length + Object.keys(users[user].answers).length
        const byScore = (a, b) => score(b) - score(a)
        return (
            <div className='leader-board'>
                <ul>
                    {Object.keys(users).sort(byScore).map(id => (
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