import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import classes from './BookedCard.module.css';
const BookedCard = props => {
    const {img,desc,price,totalReview} = props.booked
    return (
        <div className="col-md-3">
            <div className={classes.BookedCard}>
                <img src={img} />
                <p>
                    <span style={{marginRight:'10px'}}>{'$' +price}</span>
                    {desc}
                </p>
                <p>
                    <span className={classes.ReviewStar}>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        starColor='#03848A'
                        emptyStarColor='#03848A'
                        editing={false}
                    />
                    </span>
                    {totalReview} Reviews
                </p>
                {/* <p>{review}</p> */}
                <div className="">
                </div>
            </div>
        </div>
    )
}
export default BookedCard