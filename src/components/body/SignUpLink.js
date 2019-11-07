import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUpLink = () => {
    return (

        <ul className="right">
            {/* <li><NavLink to='/'>Login</NavLink></li> */}
            <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
        </ul>
    )
}

export default SignUpLink;