import React, { useEffect, useState } from 'react'
// import classes from './Home.module.css'
import SearchForm from '../SearchForm/SearchForm'
import ListCard from './ListCard/ListCard'
import classes from './SearchList.module.css'
import axios from '../../Config/Config'
const SearchList= props => {
    const [detailsData,setDetailsData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('/properties')
            .then(response =>{ 
                setDetailsData(response.data);
                setLoading(false)
            }

            );
    },[]);
    let list= null
    if(!loading) {
        list = detailsData.map(detail => {
            return <ListCard key={detail.id} detail={detail}/>
        });
        console.log(list)
    }
    return (
        <div className={classes.SearchList}>
            <div className="container">
                <SearchForm />
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
export default SearchList