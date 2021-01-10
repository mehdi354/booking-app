import React, { useEffect, useState } from 'react'
// import classes from './Home.module.css'
import SearchForm from '../SearchForm/SearchForm'
import PropertyCard from './PropertyCard/PropertyCard'
import classes from './PropertyList.module.css'
// import axios from '../../Config/Config'
import {connect} from 'react-redux'
import * as actions from '../../store/Actions/index'
import Spinner from '../UI/Spinner/Spinner'
import Pagination from '../Pagination/Pagination'
const PropertyList = props => {
    const [currentPage,setCurrentPage] =useState(1);
    const [postsPerPage,setPostsPerPage] =useState(5);

    useEffect(()=>{
        props.onFetchProperties()
    },[props,props.onFetchProperties]);

    let list= <Spinner />;

    if(!props.loading) {

            
    var indexOfLastPost = currentPage * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts = props.detailsData.slice(indexOfFirstPost, indexOfLastPost);

    var paginate = pageNum => setCurrentPage(pageNum);

    var nextPage = () => setCurrentPage(currentPage + 1);

    var prevPage = () => setCurrentPage(currentPage - 1);

        if(currentPosts.length > 0){
            list = currentPosts.map(detail => {
                return <PropertyCard key={detail.id} detail={detail} />
            });
        }else {
            list = <h4>No Properties to show</h4>
        }
        console.log(currentPosts);
    }


    return (
        <div className={classes.SearchList}>
            <div className="container">
                <SearchForm {...props}/>
                <div className={classes.SearchListContent}>
                    {list}
                </div>
                <div className={classes.SearchPAgination}>
                {/* <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="/">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="/">1</a></li>
                        <li class="page-item"><a class="page-link" href="/">2</a></li>
                        <li class="page-item"><a class="page-link" href="/">3</a></li>
                        <li class="page-item"><a class="page-link" href="/">Next</a></li>
                    </ul>
                    </nav> */}

                    <Pagination postsPerPage={postsPerPage} totalPosts={props.detailsData.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
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