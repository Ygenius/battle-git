import React from 'react';
import LanguagesNav from './LanguagesNav';
import PropTypes from 'prop-types'
import {fetchPopularRepos} from '../utils/api'
import RepoGrid from './ReposGrid';
import Loading from './Loading';

class Popular extends React.Component{
  
       state = {
           selectedLanguage:'All',
           error:null,
           repos:{}
       }
  
   componentDidMount () {
       this.updateSelectedLanguage(this.state.selectedLanguage)
   }
    updateSelectedLanguage (selectedLanguage){
        const {repos} = this.state
        this.setState({
            selectedLanguage,
            error:null
        })
        if(!repos[selectedLanguage]){
            fetchPopularRepos(selectedLanguage)
            .then((data) => {
                this.setState(({repos}) =>({
                    repos:{
                        ...repos,
                        [selectedLanguage]:data
                    }
                }))
            })
            .catch((error) => {
                console.warn('An error occured',error)
                this.setState({
                    error:'There was an error fetching the repositories'
                })
            })
            
        } 
    }
    isLoading () {
        const {error,repos,selectedLanguage} = this.state
        return !repos[selectedLanguage] && error === null
    }
    render() {
       const  {error,repos,selectedLanguage} = this.state
        return (
           <React.Fragment>
               <LanguagesNav 
               selected={this.state.selectedLanguage}
               onSelected={this.updateSelectedLanguage}
               />
               {this.isLoading() && <Loading text='Fetching Repos'/>}
               {error && <p>{error}</p>}
               {repos[selectedLanguage] && <RepoGrid repos = {repos[selectedLanguage]}/>}
           </React.Fragment>
        )
    }
}

export default Popular;