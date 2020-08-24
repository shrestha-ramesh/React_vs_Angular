import React,{useState} from 'react'
import './header.styles.scss'
import {ReactComponent as BusinessIcon} from '../../assets/nes.svg'

const Header=(props)=>{

    const [linkOpen,setLinkOpen]=useState(false) 


    const toggleNavigation=()=>{
        setLinkOpen(!linkOpen)
    }

    return(
        <header className="header">
            <nav className="navigation-container">
                <BusinessIcon/>
                <ul className={`link-container ${linkOpen?'display-link-container':''}`}>
                    <li><span>Home</span></li>
                    <li><span>Cloud Platform</span></li>
                    <li><span>About Us</span></li>
                    <li><span>Schedule Demo</span></li>
                </ul>
                <div className="nav-button-container" onClick={toggleNavigation}>
                    <span className="nav-button"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header