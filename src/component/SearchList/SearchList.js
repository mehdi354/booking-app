import React, { useEffect, useState } from 'react'
// import classes from './Home.module.css'
import SearchForm from '../SearchForm/SearchForm'
import ListCard from './ListCard/ListCard'
import classes from './SearchList.module.css'
// import axios from '../../Config/Config'
import {connect} from 'react-redux'
import * as actions from '../../store/Actions/index'
import Spinner from '../UI/Spinner/Spinner'
import Pagination from '../Pagination/Pagination'
const SearchList= props => {

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
                return <ListCard key={detail.id} detail={detail} />
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

                    <Pagination postsPerPage={postsPerPage} totalPosts={props.detailsData.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>

                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        detailsData : state.property.searchData,
        loading : state.property.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProperties : () => dispatch(actions.fetch_properties())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchList)