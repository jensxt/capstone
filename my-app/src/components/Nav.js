import React from 'react'
import logo from '../images/Logo .svg'


export default function Nav (){
    return (
        <nav>
            <a href='/'>
            <img src={logo} alt='logo' />
            </a>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservation</a>
                </li>
            </ul>
        </nav>
    )
}