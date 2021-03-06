import React from 'react';
import PropTypes from 'prop-types'
import {ThemeConsumer} from '../Context/ThemeContext'
class PlayerInput extends React.Component {
  
        state = {
            username:''
        }
    
    
    handleChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    render() {
        return(
        <ThemeConsumer>
          {({theme})=>(
            <form className='column player' onSubmit={this.handleSubmit}>
            <label htmlFor='username' className='player-label'>
              {this.props.label}
            </label>
            <div className='row player-inputs'>
              <input
                type='text'
                id='username'
                className={`input-${theme}`}
                placeholder='github username'
                autoComplete='off'
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button
                className={`btn ${theme === 'dark' ? 'light-btn': 'dark-btn'}`}
                type='submit'
                disabled={!this.state.username}
              >
                Submit
              </button>
            </div>
          </form>
          )}
        </ThemeConsumer>  
        
        
        )
    }
}
export default PlayerInput
PlayerInput.propTypes = {
label:PropTypes.string.isRequired,
onSubmit:PropTypes.func.isRequired
}