import React, { useState } from 'react'
import classes from './TopNav.module.css'
import TopNavigation from './Navigation/TopNavigation';

const TopNav = props => {
    const [location,setLocation] = useState("Anywhere");
    const [anytime,setAnyTime] = useState("Anytime");
    const [guest,setGuest] = useState("Guest");
    return (
        <div className="container-fluid">
            <div className={classes.TopNav}>
                <div className="row">
                    <div className="col-md-8 ps-2">
                        <div className={"ms-5 ps-3 " + classes.TopNavForm}>
                            <form>
                                <div className="row">
                                    <div className="col-md-3 px-0">
                                        <div className={
                                            classes.InputFormControl +" "+ classes.InputLeftBorder
                                            }>
                                            <span className={classes.InputIcon}> <i className="fas fa-search"></i> </span>
                                            <input 
                                                type="text" 
                                                name="location"
                                                value={location} 
                                                onChange={(e)=>setLocation(e.target.value)} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3 px-0">
                                        <div className={classes.InputFormControl}>
                                            <span className={classes.InputIcon}> <i className="far fa-calendar"></i> </span>
                                            <input 
                                                type="text" 
                                                name="location"
                                                value={anytime} 
                                                onChange={(e)=>setAnyTime(e.target.value)} 
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-3 px-0">
                                        <div className={classes.InputFormControl +" "+ classes.InputRightBorder}>
                                            <span className={classes.InputIcon}> <i className="fas fa-user-friends"></i> </span>
                                            <input 
                                                type="text" 
                                                name="location"
                                                value={guest} 
                                                onChange={(e)=>setGuest(e.target.value)} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <TopNavigation/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNav