import React from 'react'
import {Link} from 'react-router-dom'

const UserCard = ({username}) => {
  return (
    <Link to={`/user/${username}`}>
        <div>
            <p>{username}</p>
        </div>
    </Link>
  )
}

export default UserCard