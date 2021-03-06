import React, { useState } from 'react'
import classes from './Host.module.css'
import Spinner from '../UI/Spinner/Spinner'
import {connect} from 'react-redux'
import * as actions from '../../store/Actions/index'

const Host = props => {
    const [loading,setLoading] = useState(false);
    const [name,setName] = useState('');
    const [avatar,setAvater] = useState('');
    const [username,setUsername] = useState('');
    const [title,setTitle] = useState('');
    const [hotelName,setHotelName] = useState('');
    const [rating,setRating] = useState('1');
    const [image_1,setimage_1] = useState('');
    const [image_2,setimage_2] = useState('');
    const [image_3,setimage_3] = useState('');
    const [desription,setDesription] = useState('');
    const [price,setPrice] = useState('');
    const [type,setType] = useState('');
    const [guests,setGuests] = useState('');
    const [bedroom,setBedroom] = useState('');
    const [beds,setbeds] = useState('');
    const [bathrooms,setbathrooms] = useState('');
    const [breakfast,setbreakfast] = useState('');
    const [extra_1,setextra_1] = useState('');
    const [extra_2,setextra_2] = useState('');
    const [extra_3,setextra_3] = useState('');
    const [checkIn,setcheckIn] = useState('');
    const [location,setlocation] = useState('');
    const onFormSubmit = (e) =>{
        e.preventDefault();
        setLoading(true)
        const data = {
            id: Math.random.toString(),
            name: name,
            avatar: avatar,
            username: username,
            hotelName: hotelName,
            title: title,
            rating: rating,
            image_url_1: image_1,
            image_url_2: image_2,
            image_url_3: image_2,
            desription: desription,
            price: price,
            type: type,
            guests: guests,
            bedroom: bedroom,
            beds: beds,
            bathrooms: bathrooms,
            checkIn: checkIn,
            breakfast: breakfast,
            others: [
                extra_1,extra_2,extra_3
            ],
            location: location,
            totalreview: '50'
        }
        props.onSubmitProperty(data,props.history);
    }

    let showLoader = null;
    if(loading) {
        showLoader = <Spinner />
    }

    return (
        <div className="container">
            {showLoader}
            <div className="col-md-12">
                <div className={classes.Host}>
                    <h4>Become a host.</h4>
                    <p>Please Complete the following form to submit your details</p>
                    <form>
                    <div className="mb-3">
                        <legend className={classes.Legend}>User Information</legend>
                    </div> 

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Name</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className={`form-control + ${classes.capitalize}`} value={name} onChange={e => setName(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">avatar</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={avatar} onChange={e => setAvater(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">username</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <legend className={classes.Legend}>Images</legend>
                    </div> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                            <div className="row">
                                <div className="col-md-3">
                                    <label  className="form-label">Image 1</label>
                                </div>
                                <div className="col-md-9">
                                <input type="text" className="form-control" value={image_1} onChange={e => setimage_1(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                    <label  className="form-label">Image 2</label> 
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={image_2} onChange={e => setimage_2(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Image 3</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={image_3} onChange={e => setimage_3(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <legend className={classes.Legend}>Property Description</legend>
                    </div> 
                    <div className="row">
                    <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Hotel Name</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={hotelName} onChange={e => setHotelName(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">title</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">description</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={desription} onChange={e => setDesription(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">rating</label>
                                    </div>
                                    <div className="col-md-9">
                                        <select className="form-control" value={rating} onChange={e => setRating(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">price</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">type</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={type} onChange={e => setType(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-6">
                            <div className="mb-3">
                            <div className="row">
                                <div className="col-md-3">
                                    <label  className="form-label">guests</label>
                                </div>
                                <div className="col-md-9">
                                <input type="text" className="form-control" value={guests} onChange={e => setGuests(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">bedroom</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={bedroom} onChange={e => setBedroom(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">beds</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={beds} onChange={e => setbeds(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">bathrooms</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={bathrooms} onChange={e => setbathrooms(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Check In</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={checkIn} onChange={e => setcheckIn(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">breakfast</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={breakfast} onChange={e => setbreakfast(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Extra 1</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={extra_1} onChange={e => setextra_1(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                            <div className="row">
                                <div className="col-md-3">
                                    <label  className="form-label">Extra 2</label>
                                </div>
                                <div className="col-md-9">
                                <input type="text" className="form-control" value={extra_2} onChange={e => setextra_2(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Extra 3</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className="form-control" value={extra_3} onChange={e => setextra_3(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label  className="form-label">Location</label>
                                    </div>
                                    <div className="col-md-9">
                                    <input type="text" className={`form-control + ${classes.capitalize}`}  value={location} onChange={e => setlocation(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row text-center">
                            <div className="text-center">
                                <button type="button" className={classes.SubmitBTN} onClick={onFormSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading : state.property.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitProperty : (data,history) => dispatch(actions.submitPost(data,history))
    }
}


export default connect(null,mapDispatchToProps)(Host)
