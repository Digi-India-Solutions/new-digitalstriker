import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from './logo1.png'

function Header() {
    const [isActiveAbout, setIsActiveAbout] = useState(false)
    const [isActiveService, setIsActiveService] = useState(false)
    const [isActiveCareer, setIsActiveCareer] = useState(false)
    const [isActiveClient, setIsActiveClient] = useState(false)
    const [isActiveMenuDropdown, setIsActiveMenuDropDown] = useState(false)

    // Desktop hover handlers
    const handleMouseEnterAbout = () => {
        if (window.innerWidth > 991) {
            setIsActiveAbout(true)
        }
    }

    const handleMouseLeaveAbout = () => {
        if (window.innerWidth > 991) {
            setIsActiveAbout(false)
        }
    }

    const handleMouseEnterService = () => {
        if (window.innerWidth > 991) {
            setIsActiveService(true)
        }
    }

    const handleMouseLeaveService = () => {
        if (window.innerWidth > 991) {
            setIsActiveService(false)
        }
    }

    const handleMouseEnterCareer = () => {
        if (window.innerWidth > 991) {
            setIsActiveCareer(true)
        }
    }

    const handleMouseLeaveCareer = () => {
        if (window.innerWidth > 991) {
            setIsActiveCareer(false)
        }
    }

    const handleMouseEnterClient = () => {
        if (window.innerWidth > 991) {
            setIsActiveClient(true)
        }
    }

    const handleMouseLeaveClient = () => {
        if (window.innerWidth > 991) {
            setIsActiveClient(false)
        }
    }

    // Mobile click handlers (Toggle)
    const handleClickAbout = (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault()
            setIsActiveAbout(!isActiveAbout)
        }
    }

    const handleClickService = (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault()
            setIsActiveService(!isActiveService)
        }
    }

    const handleClickCareer = (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault()
            setIsActiveCareer(!isActiveCareer)
        }
    }

    const handleClickClient = (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault()
            setIsActiveClient(!isActiveClient)
        }
    }

    // Menu toggle
    const handleToggleMenu = () => {
        setIsActiveMenuDropDown(!isActiveMenuDropdown)
    }

    // Close all menus
    const handleCloseAll = () => {
        setIsActiveMenuDropDown(false)
        setIsActiveAbout(false)
        setIsActiveService(false)
        setIsActiveCareer(false)
        setIsActiveClient(false)
    }

    return (
        <header className='header'>
            <div className="container">
                <Link onClick={handleCloseAll} to={'/'} className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    <ul className={`main-ul ${isActiveMenuDropdown ? 'mainmenudropdown' : ''}`}>
                        <li>
                            <Link className='for-white' onClick={handleCloseAll} to={'/'}>
                                Home
                            </Link>
                        </li>

                        <li 
                            onMouseEnter={handleMouseEnterAbout} 
                            onMouseLeave={handleMouseLeaveAbout} 
                            className='about-pointer'
                        >
                            <Link 
                                className='for-white' 
                                onClick={handleClickAbout}
                            >
                                About Us
                            </Link>
                            <ul className={`about-hover ${isActiveAbout ? 'active-about-hover' : ''}`}>
                                <Link onClick={handleCloseAll} to={'/about'}>
                                    Company Overview
                                </Link>
                                <Link onClick={handleCloseAll} to={'/mission'}>
                                    Our Mission
                                </Link>
                                <Link onClick={handleCloseAll} to={'/vision'}>
                                    Our Vision & Values
                                </Link>
                                <Link onClick={handleCloseAll} to={'/managment'}>
                                    Management Team
                                </Link>
                            </ul>
                        </li>

                        <li 
                            onMouseEnter={handleMouseEnterService} 
                            onMouseLeave={handleMouseLeaveService} 
                            className='services-pointer'
                        >
                            <Link 
                                className='for-white'
                                onClick={handleClickService}
                            >
                                Products
                            </Link>
                            <ul className={`services-hover ${isActiveService ? 'active-service-hover' : ''}`}>
                                <Link onClick={handleCloseAll} to={'/fiber-product'}>
                                    Optical Fiber Tools
                                </Link>
                                <Link onClick={handleCloseAll} to={'/passive-product'}>
                                    Passive Products
                                </Link>
                                <Link onClick={handleCloseAll} to={'/active-product'}>
                                    Active Products
                                </Link>
                            </ul>
                        </li>

                        <li 
                            className='career-pointer' 
                            onMouseEnter={handleMouseEnterCareer} 
                            onMouseLeave={handleMouseLeaveCareer}
                        >
                            <Link 
                                className='for-white'
                                onClick={handleClickCareer}
                            >
                                Career
                            </Link>
                            <ul className={`career-hover ${isActiveCareer ? 'active-career-hover' : ''}`}>
                                <Link onClick={handleCloseAll} to={'/why-join'}>
                                    Why Join Us
                                </Link>
                            </ul>
                        </li>

                        <li 
                            className='client-pointer' 
                            onMouseEnter={handleMouseEnterClient} 
                            onMouseLeave={handleMouseLeaveClient}
                        >
                            {/* <Link 
                                className='for-white'
                                onClick={handleClickClient}
                            >
                                Our Clients
                            </Link> */}
                            <ul className={`client-hover ${isActiveClient ? 'active-client-hover' : ''}`}>
                                <Link onClick={handleCloseAll} to={'/presence'}>
                                    Our Presence
                                </Link>
                            </ul>
                        </li>

                        <li>
                            <Link onClick={handleCloseAll} className='for-white' to={'/events'}>
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link onClick={handleCloseAll} className='for-white' to={'/contact'}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleToggleMenu} className="menu-bar">
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </header>
    )
}

export default Header