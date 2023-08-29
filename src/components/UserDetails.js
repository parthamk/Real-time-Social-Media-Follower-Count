import React, {useEffect, useState} from 'react'

const UserDetails = ({match}) => {
    const {username} = match.params;
    const [followerCount, setFollowerCount] = useState(0);

    useEffect(() => {
        // user detail fetch
    })

  return (
    <div>
        <h1>{username}'s Details</h1>
        <p>Follower Count: {followerCount}</p>
    </div>
  )
}

export default UserDetails