import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginLink = () => {
    return (
        
        <ul className="right">
            <li><NavLink to='/Login'>Login</NavLink></li>
        </ul>
    )
}

export default LoginLink;