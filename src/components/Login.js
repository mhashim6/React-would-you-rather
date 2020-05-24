import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../actions/authedUser'

class Login extends Component {

    state = {
        user: 'sarahedo'
    }

    handleUserChange = e => {
        this.setState({ user: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.dispatch(changeUser(this.state.user))
        //TODO: redirect to /
    }

    render() {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.user} onChange={this.handleUserChange}>
                        <option value='sarahedo'>Sarah Edo</option>
                        <option value='tylermcginnis'>Tyler McGinnis</option>
                        <option value='johndoe'>John Doe</option>
                    </select>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({

})

export default connect(mapStateToProps)(Login)