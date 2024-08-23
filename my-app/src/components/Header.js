import React from "react"
import bannerPic from "../images/Mario and Adrian A.jpg"
import { Link } from 'react-router-dom';

export default function Header (){
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediteraneran restaurant, 
                        focused on traditionel recipes, served with a modern twist</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve a table</button></Link>
                </div>
                <div className="banner-img">
                    <img src={bannerPic}/>
                </div>
            </section>
        </header>
    )
}