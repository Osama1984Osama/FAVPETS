import React from 'react'
import './Logout.css'
import { Link } from 'react-router-dom'

function Logout() {
    return (
        <div className = 'logout'>
         
            <Link to='/login'>Back to Login </Link>

        </div>
    )
}

export default Logout
