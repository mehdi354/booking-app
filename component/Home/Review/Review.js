import React from 'react'
import classes from './Review.module.css'
import ReviewItem from './ReviewItem/ReviewItem'
import star from '../../../assets/image/star.png';
const Review = props => {
    const ReviewData = [{
        id: Math.random().toString(),
        review: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk=',
        ratings: 5,
        name: 'John',
        location: 'China',
        avaterlink: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
    },
    {
        id: Math.random().toString(),
        review: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk=',
        ratings: 4,
        name: 'John',
        location: 'China',
        avaterlink: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
    },
    {
        id: Math.random().toString(),
        review: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk=',
        ratings: 3,
        name: 'John',
        location: 'China',
        avaterlink: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
    }]

    const ReviewContent = ReviewData.map( (review) => {
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
export default Review