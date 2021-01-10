import React from 'react'
import classes from './FooterCopyright.module.css'
const FooterCopyright = props => {
    return (
        <div className="container">
            <div className={classes.FooterCopyright}>
            <div className="row"> 
                <div className="col-md-6">
                    <p> <i className="fab fa-airbnb"></i> Airbnb, Inc.</p>
                </div>
                <div className="col-md-6">
                <div className={classes.MenuWithSocialMedia}>
                    <ul>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Site Map</a></li>
                        <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            
                </div>
            </div>   
            </div>
        </div>
    )
}
export default FooterCopyright