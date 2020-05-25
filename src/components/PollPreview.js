import React, { Component } from 'react'
import { connect } from 'react-redux'
import { textPreview } from '../utils'
import { Link } from 'react-router-dom'


class PollPreview extends Component {

    render() {
        const { poll, author } = this.props

        return (
            <Link to={`/polls/${poll.id}`}>
                <div className='poll-preview'>
                    <div className='author-data'>
                        <img className='avatar' src={author.avatarURL} />
                        <span>{author.name}</span>
                    </div>
                    <h3>{`${author.name} asks would you rather…`}</h3>
                    <p>{textPreview(poll.optionOne.text)}</p>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = ({ polls, users }, { pollId }) => {
    const poll = polls[pollId]
    
    return {
        poll,
        author: users[poll.author]
    }
}

export default connect(mapStateToProps)(PollPreview)