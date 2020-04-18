import React from 'react'
import PropTypes from 'prop-types'

export default function LanguagesNav ({selected,onSelected}) {
    const languages = ['All','JavaScript','Ruby','CSS','Python']
    return (
        <ul className='flex-center'>
        {languages.map((lang) => (
            <li key={lang}>
                <button className='btn-clear-nav-link'
                style={lang === selected ? {color:'rgb(187,46,31)'}:null }
                onClick={() => onSelected(lang)}
                >{lang}</button>
            </li>
        ))}
    </ul>
    )
}
LanguagesNav.propTypes = {
    selected:PropTypes.string.isRequired,
    onSelected:PropTypes.func.isRequired
}