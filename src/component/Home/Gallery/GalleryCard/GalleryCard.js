
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import classes from './GalleryCard.module.css';
const GalleryCard = React.memo(props => {
    const {img,type,name,designation} = props.gallery
    return (
        <div className="col-md-5ths col-xs-6">
            <div className={classes.GalleryCard}>
                <div className={classes.GalleryCardImage}>
                    <img src={img} />
                    <div className={classes.GalleryCardImageConent}>
                        <h6>GUIDE</h6>
                        <p>{type}</p>
                    </div>
                    
                </div>
                <p>
                    By <span> {name}  </span> {designation} 
                </p>
                
                
            </div>
        </div>
    )
})
export default GalleryCard