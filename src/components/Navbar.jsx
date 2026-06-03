import React from 'react'
import './navbar.css'
import logo from '../assets/images/logo.svg'
import { FaChevronDown } from "react-icons/fa";
import calendar from '../assets/images/icon-calendar.svg'
import planning from '../assets/images/icon-planning.svg'
import reminders from '../assets/images/icon-reminders.svg'
import todo from '../assets/images/icon-todo.svg'
import menu from '../assets/images/icon-menu.svg'
import { IoClose } from "react-icons/io5";

function openMenu() {
    const menu = document.querySelector('.menu')

    menu.style.display = 'block'
}

function closeMenu() {
    const menu = document.querySelector('.menu')

    menu.style.display = 'none'
}

function controlD1() {
    const d1 = document.querySelector('.d1')
    const icon = document.querySelector('.d1Icon')
    const isOpen = window.getComputedStyle(d1).display !== 'none'

    if (isOpen) {
        d1.style.display = 'none'
        icon.classList.remove('rotate')
    } else {
        d1.style.display = 'block'
        icon.classList.add('rotate')
    }
}

function controlD2() {
    const d2 = document.querySelector('.d2')
    const icon = document.querySelector('.d2Icon')
    const isOpen = window.getComputedStyle(d2).display !== 'none'

    if (isOpen) {
        d2.style.display = 'none'
        icon.classList.remove('rotate')
    } else {
        d2.style.display = 'block'
        icon.classList.add('rotate')
    }
}

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
                        <div className='menuSection'>
                            <img className='menuBtn' src={menu} onClick={openMenu} />
                            <div className='menu'>
                                <div className='menuIns'>
                                    <div className='menuClose' onClick={closeMenu}><IoClose className='closeBtn' /></div>
                                    <div className="menuList">
                                        <div className="menuDropdown" onClick={controlD1}>
                                            <p className='menuElement'>
                                                Features <FaChevronDown className='d1Icon'/>
                                            </p>

                                            <div className="menuDropdownMenu d1">
                                                <p><img src={todo} />Todo List</p>
                                                <p><img src={calendar} />Calendar</p>
                                                <p><img src={reminders} />Reminders</p>
                                                <p><img src={planning} />Planning</p>
                                            </div>
                                        </div>

                                        <div className="menuDropdown">
                                            <p className='menuElement' onClick={controlD2}>
                                                Company <FaChevronDown className='d2Icon'/>
                                            </p>

                                            <div className="menuDropdownMenu d2">
                                                <p>History</p>
                                                <p>Our Team</p>
                                                <p>Blog</p>
                                            </div>
                                        </div>

                                        <p className='menuElement'>Careers</p>
                                        <p className='menuElement'>About</p>
                                        <div className="menuActionsButtons">
                                            <button className='login'>Login</button>
                                            <button className='register'>Register</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
