import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createNewPoll } from "../actions/shared";
import { withRouter } from 'react-router-dom';
class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleOptionOneChange = (e) => {
        this.setState({ optionOne: e.target.value })
    }

    handleOptionTwoChange = (e) => { //could convert both funcs to a single func with a selector
        this.setState({ optionTwo: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        this.props.dispatch(createNewPoll({ optionOneText: optionOne, optionTwoText: optionTwo }))
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='new-poll'>
                <h2>Create a new Poll</h2>
                <h3>Would you rather…</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleOptionOneChange} placeholder='Option one' />
                    <input type='text' onChange={this.handleOptionTwoChange} placeholder='Option two' />
                    <button type='submit'>Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

})

export default withRouter(connect(mapStateToProps)(NewQuestion))