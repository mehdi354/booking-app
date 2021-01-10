import React from 'react'
import TopNav from './TopNav/TopNav'
import MainNav from './MainNav/MainNav'
const Header = props => {
    return (
        <header>
        <TopNav/>
        <MainNav/>
        </header>
    )
}
export default Header