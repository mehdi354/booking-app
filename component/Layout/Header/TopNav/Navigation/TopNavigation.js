import React from 'react'
import classes from './TopNavigation.module.css'
const TopNavigation = props => {
    return (
        <div className={classes.TopNavigation}>
            <ul>
                <li>
                    <a href="/">Become a Host</a>
                </li>
                <li>
                    <a href="/">Help</a>
                </li>
                <li>
                    <a href="/">Sign Up</a>
                </li>
                <li>
                    <a href="/">Log In</a>
                </li>
            </ul>
        </div>
    )
}
export default TopNavigation