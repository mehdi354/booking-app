import React from 'react'
import classes from './TopNavigation.module.css'
import { Link } from 'react-router-dom'
import Host from '../../../../Host/Host'
const TopNavigation = props => {
    return (
        <div className={classes.TopNavigation}>
            <ul>
                <li>
                    <Link to="/host" >Become a Host</Link>
                </li>
                <li>
                    <Link to="/">Help</Link>
                </li>
                <li>
                    <Link to="/">Sign Up</Link>
                </li>
                <li>
                    <Link to="/">Log In</Link>
                </li>
            </ul>
        </div>
    )
}
export default TopNavigation