import React from 'react'
import Header from '../../component/Layout/Header/Header'
import Footer from '../../component/Layout/Footer/Footer'
import Home from '../../component/Home/Home'
import SearchList from '../../component/SearchList/SearchList'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Details from '../../component/Details/Details'
// import Host from '../../component/Host/Host'
const Layout = props => {
    return (
        <div className="">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/searchList" component={SearchList}/>
                <Route exact path="/details/:id" component={Details}/>
                {/* <Route exact path="/host" component={Host}/> */}
            {/* <Home />
            <SearchList /> */}
            </Switch>
            <Footer />
        </div>
    )
}
export default Layout