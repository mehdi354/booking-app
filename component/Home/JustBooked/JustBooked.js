import React from 'react'
import classes from './JustBooked.module.css'
import BookedCard from './BookedCard/BookedCard'
const JustBooked = props => {
    const bookedData = [{
        id: Math.random().toString(),
        desc: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80',
        price: 225,
        totalReview: 84
    },
    {
        id: Math.random().toString(),
        desc: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGF1c3RyYWxpYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 225,
        totalReview: 84
    },
    {
        id: Math.random().toString(),
        desc: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://images.unsplash.com/photo-1494233892892-84542a694e72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXVzdHJhbGlhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 225,
        totalReview: 84
    },
    {
        id: Math.random().toString(),
        desc: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://images.unsplash.com/photo-1553851919-596510268b99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        price: 225,
        totalReview: 84
    }]

    const bookedDataContent = bookedData.map( (booked) => {
        return <BookedCard key={booked.id} booked={booked} />
    })
    return (
        <div className={classes.JustBooked}>
            <div className="col-md-12">
                <h4>Just Booked</h4>
                <div className={classes.JustBookedContent}>
                    <div className="row">
                        {bookedDataContent}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default JustBooked