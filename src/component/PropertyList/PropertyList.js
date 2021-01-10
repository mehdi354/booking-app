import React, { useEffect, useState } from 'react'
// import classes from './Home.module.css'
import SearchForm from '../SearchForm/SearchForm'
import PropertyCard from './PropertyCard/PropertyCard'
import classes from './PropertyList.module.css'
// import axios from '../../Config/Config'
import {connect} from 'react-redux'
import * as actions from '../../store/Actions/index'
import Spinner from '../UI/Spinner/Spinner'
const PropertyList = props => {
    useEffect(()=>{
        props.onFetchProperties()
    },[props]);

    let list= <Spinner />;

    if(!props.loading) {
        list = props.detailsData.map(detail => {
            return <PropertyCard key={detail.id} detail={detail}/>
        });
    }


    return (
        <div className={classes.SearchList}>
            <div className="container">
                <SearchForm {...props}/>
                <div className={classes.SearchListContent}>
                    {list}
                </div>
                <div className={classes.SearchPAgination}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="/">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="/">1</a></li>
                        <li class="page-item"><a class="page-link" href="/">2</a></li>
                        <li class="page-item"><a class="page-link" href="/">3</a></li>
                        <li class="page-item"><a class="page-link" href="/">Next</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        detailsData : state.property.detailsData,
        loading : state.property.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProperties : () => dispatch(actions.fetch_properties())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PropertyList)