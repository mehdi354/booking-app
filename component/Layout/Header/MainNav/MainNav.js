import React from 'react'
import classes from './MainNav.module.css'
const MainNav = props => {
    return (
        <div className={classes.MainNav}>
            <div className="container-fluid">
                <ul>
                    <li>
                        <a href="/">FOR YOU</a>
                    </li>
                    <li>
                        <a href="/">HOMES</a>
                    </li>
                    <li>
                        <a href="/">EXPERIENCES</a>
                    </li>
                    <li>
                        <a href="/">PLACES</a>
                    </li>
                </ul>
        
            </div>
        </div>
    )
}
export default MainNav