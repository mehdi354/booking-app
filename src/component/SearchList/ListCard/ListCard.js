
import React from 'react'
import classes from './ListCard.module.css';
import { Link } from 'react-router-dom';
const ListCard = props => {
    const {id,image_url_1,tile} = props.detail
    return (
        <div className="col-md-12">
            <div className={classes.ListCard}>
                <div className="row">
                    <div className="col-md-4">
                    <div className={classes.ListCardImage}>
                        <img src={image_url_1} alt={tile}/>
                    </div>
                    </div>    
                    <div className="col-md-8">
                    <div className={classes.ListCardContent}>
                        <h6 className={classes.ListCardContentType}>
                            p room 
                            <span> <i class="fas fa-star"></i> <strong>4.61</strong>(207) </span>
                        </h6>
                        <h6 className={classes.ListCardContentTitle}>
                            <Link to={`/details/${id}`} >p room </Link>
                        </h6>
                        <ul>
                            <li>asdad</li>
                            <li>asdad</li>
                            <li>asdad</li>
                            <li>asdad</li>
                        </ul>
                        <ul>
                            <li>Wifi</li>
                            <li>Kitchen</li>
                            <li>Heating</li>
                            <li>Washing machine </li>
                        </ul>
                        <div className={classes.propertyPrice}>
                            <h6>£38 / night </h6>
                            <span>£38 total </span>
                        </div>
                    </div>
                    </div>  
                    </div> 
            </div>
        </div>
    )
}
export default ListCard