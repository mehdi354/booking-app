import React from 'react'
import classes from './Review.module.css'
import ReviewItem from './ReviewItem/ReviewItem'
import star from '../../../assets/image/star.png';
import {connect} from 'react-redux'
const Review = props => {
    const ReviewContent = props.reviewData.map( (review) => {
        return <ReviewItem key={review.id} review={review} />
    })
    return (
        <div className={classes.Review}>
            <div className="col-md-12">
                <h4>What guests are saying about homes in the United Kingdom </h4>
                <p><img src={star} className={classes.StarImg}/>United Kingdom homes were rated <strong>4.7 out of 5 stars</strong> with <strong>10,500,000+ reviews</strong> </p>
                <div className={classes.ReviewContent}>
                    <div className="row">
                        {ReviewContent}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviewData : state.home.ReviewData
    }
}


export default connect(mapStateToProps)(Review)