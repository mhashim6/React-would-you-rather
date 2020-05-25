import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollPreview from './PollPreview'

class PollList extends Component {
    render() {
        const { pollIds } = this.props
        return (
            <div className='poll-list'>
                <ul>
                    {pollIds.map(id => (
                        <li key={id}>
                            <PollPreview pollId={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, { pollIds }) => ({
    pollIds: pollIds
})

export default connect(mapStateToProps)(PollList)