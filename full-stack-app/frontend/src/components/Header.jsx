import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../context/UserContext'

function Header({title}) {
    const [token, setToken] = useContext(UserContext);

    const handleLogout=()=>{
        setToken(null);
    }
  return (
    <div className="has-text-cener m-6">
        <h1 className="title">{title}</h1>
        {token && (<button className='button' onClick={handleLogout}>Logout</button>)}
    </div>
    )
}

export default Header