import React from 'react'
import Header from '../../component/Layout/Header/Header'
import Footer from '../../component/Layout/Footer/Footer'
import Home from '../../component/Home/Home'
const Layout = props => {
    return (
        <div className="">
            <Header/>
            <Home />
            <Footer />
        </div>
    )
}
export default Layout