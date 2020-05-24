import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserSummary extends Component {
    render() {
        const { user, answeredQuestions, createdQuestions } = this.props

        return (
            <div className='user-summary'>
                <img className='avatar' src={user.avatarURL} />
                <p>{user.name}</p>
                <p>{`Answered Questions: ${answeredQuestions}`}</p>
                <p>{`Created Questions: ${createdQuestions}`}</p>
                <p>{`Score: ${answeredQuestions + createdQuestions}`}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ users }, { id }) => {
    const user = users[id]
    return {
        user,
        answeredQuestions: Object.keys(user.answers).length,
        createdQuestions: user.questions.length
    }
}

export default connect(mapStateToProps)(UserSummary)