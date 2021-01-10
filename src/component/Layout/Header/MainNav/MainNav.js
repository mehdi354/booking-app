import React from 'react'
import classes from './MainNav.module.css'
import { Link } from 'react-router-dom'
const MainNav = props => {
    return (
        <div className={classes.MainNav}>
            <div className="container-fluid">
                <ul>
                    <li>
                        <Link to="/">FOR YOU</Link>
                    </li>
                    <li>
                        <Link to="/">HOMES</Link>
                    </li>
                    <li>
                        <Link to="/">EXPERIENCES</Link>
                    </li>
                    <li>
                        <Link to="/">PLACES</Link>
                    </li>
                </ul>
        
            </div>
        </div>
    )
}
export default MainNav