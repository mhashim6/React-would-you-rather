import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollList from './PollList'

class Home extends Component {

    state = {
        showAnswered: false
    }

    updateFilter = showAnswered => this.setState({ showAnswered: showAnswered })

    render() {
        const { polls, authedUser } = this.props
        const pollIds = Object.keys(polls).sort((a, b) => polls[b].timestamp - polls[a].timestamp)
        const answeredPollsIds = pollIds
            .filter(id => polls[id].optionOne.votes.includes(authedUser) || polls[id].optionTwo.votes.includes(authedUser))
        const unAnsweredPollsIds = pollIds
            .filter(id => !polls[id].optionOne.votes.includes(authedUser) && !polls[id].optionTwo.votes.includes(authedUser))

        const {showAnswered} = this.state
        return (
            <div className='home'>
                <div className='polls-filter'>
                    <input name='questions_filter' id='answered' type='radio'
                        checked={showAnswered}
                        onChange={() => this.updateFilter(true)} />
                    <label htmlFor='answered'>Answered Questions</label>

                    <input name='questions_filter' id='unanswered' type='radio'
                        checked={!showAnswered}
                        onChange={() => this.updateFilter( false)} />
                    <label htmlFor='unanswered'>Un-Answered Questions</label>
                </div>
                {showAnswered? 
                (<div>
                    <h3>Answered Questions</h3>
                    <PollList pollIds={answeredPollsIds} />
                </div>)
                    : (<div>
                        <h3>Un-Answered Questions</h3>
                        <PollList pollIds={unAnsweredPollsIds} />
                    </div>)
                }
            </div >
        )
    }
}

const mapStateToProps = ({ polls, authedUser }, props) => ({
    polls,
    authedUser
})

export default connect(mapStateToProps)(Home)