
import React, { useState,useEffect } from 'react'
// import classes from './ListCard.module.css';
import tripadviser from '../../assets/image/tripadviser.png'
import axios from '../../Config/Config'
import DatePickerCom from '../SearchForm/DatePickerCom/DatePickerCom'

import classes from './Details.module.css';
const Details = props => {
    const [loading, setLoading]  = useState(true);
    const [detail, setDetailsData]  = useState({})
    
    useEffect(()=>{
        const query= props.match.params.id ? props.match.params.id : '';
        axios.get(`/properties?id=${props.match.params.id}`)
            .then(response =>{ 
                console.log(response.data)
                setDetailsData(response.data[0]);
                setLoading(false);
            }
            );
    },[]);

    let singleDetail = null;
    if(!loading) {
        console.log(detail)
    }


    return (
        <div className="container">
            <div className="col-md-12">
                <div className="{classes.ListCard}">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={classes.PropertyTitle}>
                                <h6>
                                    {detail.name}
                                    rratings
                                </h6>
                                <p>Location</p>
                                <p>
                                    <img src={tripadviser} alt="title"/>
                                    32 Reviews
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-9 p-0">
                                    <div className={classes.GalleryImages}>
                                        <img src={detail.image_url_1} />
                                    </div>
                                </div>
                                <div className="col-md-3 ps-2">
                                    <div className={classes.GalleryImages}><img src={detail.image_url_2} /></div>
                                    <div className={classes.GalleryImages + " py-1"}><img src={detail.image_url_2} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <div className={classes.propertyDetails}>
                                <h6>
                                    title 1 title 1 title 1
                                    <span>location</span>
                                </h6>
                                <div className={classes.avatar}>
                                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" />
                                    <p>asdasd</p>
                                </div>
                            </div>
                            <div className={classes.propertyDesc}>
                                <div className={classes.ListCardContent}>
                                    <p><i class="fas fa-home"></i>perer in asasdsa</p>
                                    <ul>
                                        <li> 2 rooms</li>
                                        <li> 2 rooms</li>
                                        <li> 2 rooms</li>
                                        <li> 2 rooms</li>
                                    </ul>
                                </div>
                                <div className={classes.ListCardContent}>
                                    <p><i class="fas fa-bell"></i>perer in asasdsa</p>
                                    <p className={classes.typeDesc}>This is one of a few places in the area that has this feature. </p>
                                </div>
                                <div className={classes.ListCardContent}>
                                    <p><i class="fas fa-phone-alt"></i>Great Communication</p>
                                    <p className={classes.typeDesc}>100% of recent guests rated Shimmy 5-star in communication.  </p>
                                </div>
                                <div className={classes.ListCardContent}>
                                    <p><i class="fas fa-phone-alt"></i>Great Communication</p>
                                    <p className={classes.typeDesc}>100% of recent guests rated Shimmy 5-star in communication.  </p>
                                </div>
        
                            </div>
                            
                            <div className={classes.propertyExtra}>
                                <p>100% Of Recent Guests Rated Shimmy 5-Star In Communication.</p>
                                <ul>
                                    <li>-100% Of Recent Guests Rated Shimmy 5-Star In Communication.</li>
                                    <li>-100% Of Recent Guests Rated Shimmy 5-Star In Communication.</li>
                                    <li>-100% Of Recent Guests Rated Shimmy 5-Star In Communication.</li>
                                    <li>-100% Of Recent Guests Rated Shimmy 5-Star In Communication.</li>
                                </ul>
                            </div>
                        </div>  
                        <div className="col-md-4">
                            <div className={classes.CheckoutDetails}>
                                <h6 className={classes.Price}>$20 <span>per night</span></h6>
                                <p className={classes.Review}>
                                    <i class="fas fa-star"></i>
                                    23 Reviews
                                </p>
                                <div className={classes.CheckoutDatesCotainer}>
                                    <label> Date</label>
                                    <div className={classes.CheckoutDates}>
                                        <DatePickerCom />
                                    </div>
                                </div>

                                <div className={classes.TotalGuest}>
                                    <div className="my-4">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="1" selected>1 guest</option>
                                            <option value="2">2 guest</option>
                                            <option value="3">3 guest</option>
                                            <option value="3">4 guest</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className={classes.Checkout}>
                                    <ul>
                                        <li>
                                            <span className={classes.CheckoutTerm}> 2 X 2 Night</span>
                                            <span className={classes.CheckoutPrice}>$24</span>
                                        </li>
                                        <li>
                                            <span className={classes.CheckoutTerm}> 2 X 2 Night</span>
                                            <span className={classes.CheckoutPrice}>$24</span>
                                        </li>
                                        <li>
                                            <span className={classes.CheckoutTerm}> Cleaning Fee</span>
                                            <span className={classes.CheckoutPrice}>$5</span>
                                        </li>
                                        <li>
                                            <span className={classes.CheckoutTerm}> Service Fee</span>
                                            <span className={classes.CheckoutPrice}>$5</span>
                                        </li>
                                        <li>
                                            <span className={classes.CheckoutTerm}> Total</span>
                                            <span className={classes.CheckoutPrice}>$30</span>
                                        </li>
                                    </ul>
                                    <button className={classes.CheckoutBTN}> Reserve </button>
                                    <p className={classes.Note}>
                                        You won't be charged yet <br />Certain reservations may also require a security deposit. 
                                    </p>
                                </div>
                            </div>
                            <p  className={classes.Report}>
                                <i class="far fa-flag"></i> Report this listing 
                            </p>
                        </div>    
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Details