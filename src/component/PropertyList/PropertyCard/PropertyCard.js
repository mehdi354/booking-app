
import React from 'react'
import classes from './PropertyCard.module.css';
import { Link } from 'react-router-dom';
const PropertyCard = props => {
    
    const {id,image_url_1,title,type,rating,price,bedroom,bed,bathroom,guests} = props.detail;
    console.log(props.detail);
    return (
        <div className="col-md-12">
            <div className={classes.ListCard}>
                <div className="row">
                    <div className="col-md-4">
                    <div className={classes.ListCardImage}>
                        <img src={image_url_1} alt={title}/>
                    </div>
                    </div>    
                    <div className="col-md-8">
                    <div className={classes.ListCardContent}>
                        <h6 className={classes.ListCardContentType}>
                            {type}
                            <span> <i class="fas fa-star"></i> <strong>{rating}</strong>(207) </span>
                        </h6>
                        <h6 className={classes.ListCardContentTitle}>
                            <Link to={`/details/${id}`} >{title} </Link>
                        </h6>
                        <ul>
                            <li>{guests} guests</li>
                            <li>{bedroom} bedroom</li>
                            <li>{bed} bed</li>
                            <li>{bathroom} bathroom</li>
                        </ul>
                        <ul>
                            <li>Wifi</li>
                            <li>Kitchen</li>
                            <li>Heating</li>
                            <li>Washing machine </li>
                        </ul>
                        <div className={classes.propertyPrice}>
                            <h6>£{price} / night </h6>
                            <span>£{price}  total </span>
                        </div>
                    </div>
                    </div>  
                    </div> 
            </div>
        </div>
    )
}
export default PropertyCard