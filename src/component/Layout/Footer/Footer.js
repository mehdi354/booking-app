import React from 'react'
import FooterNavigation from './FooterNavigation/FooterNavigation'
import FooterCopyright from './FooterCopyright/FooterCopyright'
import classes from './Footer.module.css'
const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <div className="container">
                <FooterNavigation />
                <FooterCopyright/>
            </div>
        
        </footer>
    )
}
export default Footer