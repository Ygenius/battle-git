import React from 'react'
import PropTypes from 'prop-types'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import Card from './Card'
import Tooltip from './Tooltip'

export default function RepoGrid ({repos}) {
    return (
        // <ul className='grid space-around'>
        //   {repos.map((repo, index) => {
        //     const { name, owner, html_url, stargazers_count, forks, open_issues } = repo
        //     const { login, avatar_url } = owner
    
        //     return (
        //       <li key={html_url} className='repo bg-light'>
        //         <h4 className='header-lg center-text'>
        //           #{index + 1}
        //         </h4>
        //         <img
        //           className='avatar'
        //           src={avatar_url}
        //           alt={`Avatar for ${login}`}
        //         />
        //         <h2 className='center-text'>
        //           <a className='link' href={html_url}>{login}</a>
        //         </h2>
        //         <ul className='card-list'>
        //           <li>
        //             <Tooltip text='Github username'>
        //             <FaUser color='rgb(255, 191, 116)' size={22} />
        //             <a href={`https://github.com/${login}`}>
        //               {login}
        //             </a>
        //             </Tooltip>
        //           </li>
        //           <li>
        //             <FaStar color='rgb(255, 215, 0)' size={22} />
        //             {stargazers_count.toLocaleString()} stars
        //           </li>
        //           <li>
        //             <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
        //             {forks.toLocaleString()} forks
        //           </li>
        //           <li>
        //             <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
        //             {open_issues.toLocaleString()} open
        //           </li>
        //         </ul>
        //       </li>
        //     )
        //   })}
        // </ul>

    <ul className='grid space-around'>
    {repos.map((repo, index) => {
      const { name, owner, html_url, stargazers_count, forks, open_issues } = repo
      const { login, avatar_url } = owner

      return (
        <li key={html_url}>
          <Card
            header={`#${index + 1}`}
            avatar={avatar_url}
            href={html_url}
            name={login}
          >
            <ul className='card-list'>
              <li>
                <Tooltip text="Github username">
                  <FaUser color='rgb(255, 191, 116)' size={22} />
                  <a href={`https://github.com/${login}`}>
                    {login}
                  </a>
                </Tooltip>
              </li>
              <li>
                <FaStar color='rgb(255, 215, 0)' size={22} />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                {open_issues.toLocaleString()} open
              </li>
            </ul>
          </Card>
        </li>
      )
    })}
  </ul>
      )
    }
    
    RepoGrid.propTypes = {
      repos: PropTypes.array.isRequired
    }
