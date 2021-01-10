import React from 'react'
import classes from './Home.module.css'
import SearchForm from '../SearchForm/SearchForm'
import Review from './Review/Review'
import JustBooked from './JustBooked/JustBooked'
import Gallery from './Gallery/Gallery'
const Home = props => {
    return (
        <div className={classes.Home}>
            <div className="container">
                <SearchForm />
                <Review />
                <JustBooked />
                <Gallery />
            </div>
            
        </div>
    )
}
export default Home