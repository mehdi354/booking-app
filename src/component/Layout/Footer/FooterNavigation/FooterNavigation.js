import React from 'react'
import classes from './FooterNavigation.module.css'
const FooterNavigation = props => {
    return (
        <div className={classes.FooterNavigation}>
            <div className="row">
                <div className="col-md-3">
                    <div className="footer-lan-control">
                        <div className="col col-md-8">
                            <select className="form-select" aria-label="Default select example">
                                <option value="English" selected>English</option>
                                <option value="Español">Español</option>
                                <option value="Chinese">Chinese</option>
                                <option value="3">Three</option>
                                </select>
                        </div>
                        <div className="col col-md-8">
                            <select className="form-select mt-2" aria-label="Default select example">
                                <option value="inr" selected>INR</option>
                                <option value="usd">USD</option>
                                <option value="gbp">GBP</option>
                                <option value="eur">EUR</option>
                                <option value="xbt">XBT</option>
                                </select>
                        </div>
                    </div>     
                </div> 

                <div className="col-md-3">
                    <div className={classes.FooterNav}>
                        <ul>
                            <li><a href="/" className="mb-3">Airbnb</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Press</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/" >Help</a></li>
                            <li><a href="/">Policies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className={classes.FooterNav}>
                        <ul>
                            <li><a href="/" className="mb-3">Discover</a></li>
                            <li><a href="/">Trust & Safety</a></li>
                            <li><a href="/">Travel Credit</a></li>
                            <li><a href="/">Gidt Cards </a></li>
                            <li><a href="/">Airbnb Citizen</a></li>
                            <li><a href="/" >Business Travel</a></li>
                            <li><a href="/">Guidebooks</a></li>
                            <li><a href="/">Airbnbmag</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className={classes.FooterNav}>
                        <ul>
                            <li><a href="/" className="mb-3">Hosting</a></li>
                            <li><a href="/">Why Host</a></li>
                            <li><a href="/">Hospitality</a></li>
                            <li><a href="/">Responsible Hosting </a></li>
                            <li><a href="/">Community Center</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default FooterNavigation