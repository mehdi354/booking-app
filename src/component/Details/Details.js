
import React, { useEffect, useState } from 'react'
import tripadviser from '../../assets/image/tripadviser.png'
import DatePickerCom from '../SearchForm/DatePickerCom/DatePickerCom'
import classes from './Details.module.css';
import {connect} from 'react-redux'
import * as actions from '../../store/Actions/index'
import Spinner from '../UI/Spinner/Spinner'
import SearchForm from '../SearchForm/SearchForm';

const Details = props => {

    const [cleaningCharge,setcleaningCharge] = useState(5)
    const [serviceCharge,setserviceCharge] = useState(15)

    useEffect(()=>{
        const query= props.match.params.id ? props.match.params.id : '';
        props.onFetchProperty(props.match.params.id);
    },[]);

    let content = <Spinner />;
    if(!props.loading) {
        var {
            name,image_url_1,
            image_url_2,
            image_url_3,
            checkIn,
            title,
            type,
            rating,
            price,
            bedroom,
            bed,
            bathroom,
            guests,
            avatar,
            location,
            breakfast,
            username,
            desription,
            others,
            totalreview
        } = props.detail
       if(others) {
        var extra = others.map( data => {
            return <li>- {data}</li>
        }) 
       }
        

       content =     <div className={classes.Details}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={classes.PropertyTitle}>
                                    <h6>
                                        {title}
                                    </h6>
                                    <p>{location}</p>
                                    <p>
                                        <img src={tripadviser} alt="title" className={classes.tripadviser}/>
                                        {rating} Reviews
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-9 p-0">
                                        <div className={`${classes.GalleryImages} ${classes.GalleryImagesMain}`}>
                                            <img src={ image_url_1} alt={title}/>
                                        </div>
                                    </div>
                                    <div className="col-md-3 ps-2">
                                        <div className={classes.GalleryImages}><img src={ image_url_2} alt={title}/></div>
                                        <div className={classes.GalleryImages + " py-1"}><img src={ image_url_3} alt={title}/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-8">
                                <div className={classes.propertyDetails}>
                                    <h6>
                                        {title}
                                        <span>{location}</span>
                                    </h6>
                                    <div className={classes.avatar}>
                                        <img src={avatar} alt={name}/>
                                        <p>{username}</p>
                                    </div>
                                </div>
                                <div className={classes.propertyDesc}>
                                    <div className={classes.ListCardContent}>
                                        <p><i class="fas fa-home"></i>{type}</p>
                                        <ul>
                                            <li>{guests} guests</li>
                                            <li>{bedroom} bedroom</li>
                                            <li>{bed} bed</li>
                                            <li>{bathroom} bathroom</li>
                                        </ul>
                                    </div>
                                    <div className={classes.ListCardContent}>
                                        <p><i class="fas fa-bell"></i>Check-In</p>
                                        <p className={classes.typeDesc}>{checkIn}</p>
                                    </div>
                                    <div className={classes.ListCardContent}>
                                        <p><i class="fas fa-phone-alt"></i>Breakfast</p>
                                        <p className={classes.typeDesc}>{breakfast}</p>
                                    </div>
                                    <div className={classes.ListCardContent}>
                                        <p><i class="fas fa-phone-alt"></i>Great Communication</p>
                                        <p className={classes.typeDesc}>100% of recent guests rated Shimmy 5-star in communication.  </p>
                                    </div>

                                </div>
                                
                                <div className={classes.propertyExtra}>
                                    <p>{desription}</p>
                                    <ul>
                                        {extra}
                                    </ul>
                                </div>
                            </div>  
                            <div className="col-md-4">
                                <div className={classes.CheckoutDetails}>
                                    <h6 className={classes.Price}>${price} <span>per night</span></h6>
                                    <p className={classes.Review}>
                                        <i class="fas fa-star"></i>
                                        {totalreview} Reviews
                                    </p>
                                    <div className={classes.CheckoutDatesCotainer}>
                                        <label>Date</label>
                                        <div className={classes.CheckoutDates}>
                                            <DatePickerCom />
                                        </div>
                                    </div>

                                    <div className={classes.TotalGuest}>
                                        <label>Guest</label>
                                        <div className="">
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
                                                <span className={classes.CheckoutTerm}> {price} X 2 Night</span>
                                                <span className={classes.CheckoutPrice}>${ price *2}</span>
                                            </li>
                                            <li>
                                                <span className={classes.CheckoutTerm}> Cleaning Fee</span>
                                                <span className={classes.CheckoutPrice}>${cleaningCharge}</span>
                                            </li>
                                            <li>
                                                <span className={classes.CheckoutTerm}> Service Fee</span>
                                                <span className={classes.CheckoutPrice}>${serviceCharge}</span>
                                            </li>
                                            <li>
                                                <span className={classes.CheckoutTerm}> Total</span>
                                                    <span className={classes.CheckoutPrice}>${cleaningCharge+ serviceCharge + (price *2)}</span>
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
                    </div>;
    }
    
    return (
        <div className="container">
            <div className="col-md-12">
                <SearchForm {...props}/>
                {content}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        detail : state.property.detail,
        loading : state.property.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProperty : (id) => dispatch(actions.singleProperty(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Details)