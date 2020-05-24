import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseOption } from '../actions/shared'
import { round } from '../utils'


class Poll extends Component {
    state = {
        option: this.props.selectedOption
    }

    handleOptionChange = o => {
        this.setState({ option: o })
    }

    handleSubmit = e => {
        const { poll } = this.props
        const { id } = poll
        this.props.dispatch(chooseOption({ qid: id, selectedOption: this.state.option }))
    }

    render() {
        const { poll, author, isAnsweredByUser } = this.props
        const { option } = this.state

        if (poll) {
            const op1Count = poll.optionOne.votes.length
            const op2Count = poll.optionTwo.votes.length
            const total = op1Count + op2Count

            // const op1Percentage = 
            return (<div className='poll'>
                <div className='poll-header'>
                    <h3>Would you rather?</h3>
                </div>

                <div className='poll-data'>
                    <div className='author-data'>
                        <img className='avatar' src={author.avatarURL} />
                        <span>{author.name}</span>
                    </div>
                    <div className='poll-options'>
                        <input type='radio'
                            id='optionOne'
                            checked={option === 'optionOne'}
                            disabled={isAnsweredByUser}
                            name={poll.id}
                            onChange={() => this.handleOptionChange('optionOne')} />
                        <label htmlFor="optionOne">{poll.optionOne.text}</label> 
                        {isAnsweredByUser && <label htmlFor="optionOne">{`  |   ${round(100 * op1Count/total)}%`}</label>} <br />

                        <input type='radio'
                            id='optionTwo'
                            checked={option === 'optionTwo'}
                            disabled={isAnsweredByUser}
                            name={poll.id}
                            onChange={() => this.handleOptionChange('optionTwo')} />
                        <label htmlFor="optionTwo">{poll.optionTwo.text}</label>
                        {isAnsweredByUser && <label htmlFor="optionTwo">{`  |   ${round(100 * op2Count / total)}%`}</label>}
                    </div>
                    <button disabled={isAnsweredByUser} onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>)
            }

        else { 
            return (<h3>404: poll doesn't exist!</h3>)
        }
    }
}

const mapStateToProps = ({ polls, users, authedUser }, { pollId }) => {
    console.log(polls);
    
    const poll = polls[pollId]
    const isAnsweredByUser = poll
        ? poll.optionOne.votes.concat(poll.optionTwo.votes).includes(authedUser)
        : false
    const author = poll ? users[poll.author] : null
    return {
        poll,
        author,
        isAnsweredByUser,
        selectedOption: !isAnsweredByUser || !poll ?
         'optionOne'
         : (poll.optionOne.votes.includes(authedUser) ? 'optionOne' : 'optionTwo')
    }
}

export default connect(mapStateToProps)(Poll)