import React from 'react'
import '../dist/style.css'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} /> } 
   
    {!!repos.length && 
      <Repos 
        className='repos' 
        title='Repositorios:' 
        repos={repos}
      />  
    } 
    {!!starred.length && 
      <Repos 
        className='starred' 
        title='Favoritos:' 
        repos={starred}
      />   
    }
  </div>
)

AppContent.PropTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent