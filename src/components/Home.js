import React, {useState} from 'react'
import UserCard from './UserCard';

const Home = () => {
    const [username, setUsername] = useState('');

    const handleSearch = ()=> {
        // for fetching user data and navigate to user details page
    };

  return (
    <div>
        <h1>Twitter Follower Counter</h1>
        <input 
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Enter Twitter Username'
        />
        <button onClick={handleSearch}>Search</button>
        <UserCard username={username} />
    </div>
  )
}

export default Home