import React from 'react';
import {ThemeConsumer} from '../Context/ThemeContext'
import {NavLink} from 'react-router-dom'

const activeStyle = {
    color:'rgb(187,46,31)'
}
export default function Nav () {
    return(
        <ThemeConsumer>
            {({theme,toggleTheme}) => (
                <nav className = 'row space-between'>
                    <ul className='row nav'>
                        
                        <li><NavLink to='/' exact className='nav-link' activeStyle={activeStyle}>Popular</NavLink></li>
                        <li><NavLink to='/battle' className='nav-link' activeStyle={activeStyle}>Battle</NavLink></li>
                    </ul>
                    <button
                    onClick={toggleTheme}
                    style={{fontSize:30}}
                    className='btn-clear'
                    >
                    {theme === 'light' ? '🔦':'💡'} 
                    </button>
                </nav>
              
    )}
        </ThemeConsumer>
    )
}
