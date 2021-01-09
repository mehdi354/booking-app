import React from 'react'
import classes from './ReviewItem.module.css'
import StarRatingComponent from 'react-star-rating-component';
const ReviewItem = props => {
    const {img,ratings,review,avaterlink,name,location} = props.review
    return (
        <div className="col-md-4">
            <div className={classes.ReviewItem}>
                <img src={img} />
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={ratings}
                    starColor='#03848A'
                    emptyStarColor="#b4b4b4"
                    editing={false}
                />
                <p>{review}</p>
                <div className={classes.AuthorContent}>
                    <div className={classes.AuthorImg}>
                        <img src={avaterlink} />
                    </div>
                    <div className={classes.AuthorDesc}>
                        <h6>{name}</h6>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReviewItem