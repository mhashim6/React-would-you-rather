import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollList from './PollList'

class Home extends Component {
    render() {
        const { polls, authedUser } = this.props
        const pollIds = Object.keys(polls).sort((a, b) => polls[a].timestamp - polls[b].timestamp)
        const answeredPollsIds = pollIds
            .filter(id => polls[id].optionOne.votes.includes(authedUser) || polls[id].optionTwo.votes.includes(authedUser))
        const unAnsweredPollsIds = pollIds
            .filter(id => !polls[id].optionOne.votes.includes(authedUser) && !polls[id].optionTwo.votes.includes(authedUser))

        return (
            <div className='home'>
                <div>
                    <h3>Answered Questions</h3>
                    <PollList pollIds={answeredPollsIds} />
                </div>
                <div>
                    <h3>Un-Answered Questions</h3>
                    <PollList pollIds={unAnsweredPollsIds} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ polls, authedUser }, props) => ({
    polls,
    authedUser
})

export default connect(mapStateToProps)(Home)