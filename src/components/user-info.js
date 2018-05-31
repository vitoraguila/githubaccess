import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h1 className='username'>
      <a href={`http://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositorios: 122</li>
      <li>- Seguidores: 12</li>
      <li>- Seguindo: 2</li>
    </ul>
  </div>
)

UserInfo.PropTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.array.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo