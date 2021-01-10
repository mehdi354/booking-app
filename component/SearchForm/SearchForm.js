import React, { useState } from 'react'
import classes from './SearchForm.module.css'
import DatePickerCom from './DatePickerCom/DatePickerCom'


const SearchForm = props => {
    const [showDropDown,setShowDropDown] = useState(false)
    const [adult,setShowAdult] = useState("0")
    const [children,setShowChildren] = useState("0")
    const [room,setRoom] = useState("0")
    const [totalDescCount,setTotalDescCount] = useState(`0 Aduls 0 Children 0 Room`);
    const [location,setLocation] = useState("Anywhere");
    const [anytime,setAnyTime] = useState("Anytime");


    const setInputVal = (e) => {
        e.preventDefault();
        let text = `${adult} Adults ${children} Children ${room} Room`;
        setTotalDescCount(text);
        setShowDropDown(false)
    }
        // To show dropdown 
        const showDropdown = () => {
            setShowDropDown(true)
        };
        let dropdown = null;
        if(showDropDown) {
            dropdown = <div className="passDropDown animate slideIn active-dropdown" >
            <div className="col-md-12">
                <div className="custom_form_group form-group form-group-3 has-feedback has-feedback-left">
                    <div className="input-field-single">
                        <p>Adults</p>
                        <div className="no-of-adults">
                            <input type="text" name="adults" className={classes.in_field} value={adult} onChange={(e)=> setShowAdult(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-field-single">
                        <p>Children</p>
                        <div className="no-of-adults">
                            <input type="text" name="child"  className={classes.in_field} value={children} onChange={(e)=> setShowChildren(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-field-single">
                        <p>Rooms</p>
                        <div className="no-of-adults">
                            <input type="text" name="room" className={classes.in_field} value={room} onChange={(e)=> setRoom(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-field-single">
                        <div className="text-center">
                            <button className={classes.Confirm} onClick={setInputVal}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
    return (
        <div className="col-md-12 mt-5">
            <div className={classes.SearchForm}>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className={classes.FormText}>
                                <h4>Resorts</h4>
                                <p>Treat yourself! your dream resorts stay just a few click away</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={classes.FormContents}>
                            <div className="row mx-0">
                                <div className="col-md-4 px-0">
                                    <div className={ classes.InputFormControl }>
                                        <span className={classes.InputIcon}> <i className="fas fa-bed"></i> </span>
                                        <input 
                                            type="text" 
                                            name=""
                                            className={classes.Input}
                                            value={location} 
                                            onChange={(e)=>setLocation(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3 px-0">
                                    <div className={ classes.InputFormControl }>
                                        <span className={classes.InputIcon}> <i className="far fa-calendar-alt"></i> </span>
                                        <DatePickerCom/>
                                    </div>
                                </div>
                                <div className="col-md-4 px-0">
                                <div className={ classes.InputFormControl}>
                                    <div className={ classes.FullWidth}>
                                        <span className={classes.InputIcon}> <i className="fas fa-user-friends"></i> </span>
                                        <input 
                                            type="text" 
                                            name=""
                                            // value={} 
                                            // onChange={} 
                                            value={totalDescCount}
                                            className={classes.Input}
                                            onChange={(e)=>setTotalDescCount(e.target.value)}
                                            onClick={(e) => showDropdown(e)}
                                            readOnly
                                        />
                                        <span className={classes.SortArrow}><i class="fas fa-sort"></i></span>
                                    </div>
                                        {dropdown}
                                    </div>
                                </div>
                                <div className="col-md-1 px-0">
                                    <div className={ classes.InputFormControl + " text-center"}>
                                        <button className={classes.SearchBTN}>Search</button>
                                    </div>
                                </div>
                            </div>
                            
                        
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default SearchForm