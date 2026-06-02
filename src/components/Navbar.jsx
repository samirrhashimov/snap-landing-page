import React from 'react'
import './navbar.css'
import logo from '../assets/images/logo.svg'
import { FaChevronDown } from "react-icons/fa";
import calendar from '../assets/images/icon-calendar.svg'
import planning from '../assets/images/icon-planning.svg'
import reminders from '../assets/images/icon-reminders.svg'
import todo from '../assets/images/icon-todo.svg'

const Navbar = () => {
    return (
        <div>
            <div className='navbarSection'>
                <div className='navbar'>
                    <div className="navLeft">
                        <div className='logo'>
                            <img className='logoImg' src={logo}></img>
                        </div>
                        <div className="navList">
                            <div className="dropdown">
                                <p className='navElement'>
                                    Features <FaChevronDown />
                                </p>

                                <div className="dropdownMenu">
                                    <p><img src={todo} />Todo List</p>
                                    <p><img src={calendar} />Calendar</p>
                                    <p><img src={reminders} />Reminders</p>
                                    <p><img src={planning} />Planning</p>
                                </div>
                            </div>

                            <div className="dropdown">
                                <p className='navElement'>
                                    Company <FaChevronDown />
                                </p>

                                <div className="dropdownMenu">
                                    <p>History</p>
                                    <p>Our Team</p>
                                    <p>Blog</p>
                                </div>
                            </div>

                            <p className='navElement'>Careers</p>
                            <p className='navElement'>About</p>
                        </div>
                    </div>

                    <div className='navRight'>
                        <div className="actionsButtons">
                            <button className='login'>Login</button>
                            <button className='register'>Register</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
