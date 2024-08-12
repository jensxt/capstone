import React from "react"
import bannerPic from "../images/Mario and Adrian A.jpg"

export default function Header (){
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediteraneran restaurant, 
                        focused on traditionel recipes, served with a modern twist</p>
                    <button>Reserve a table</button>
                </div>
                <div className="banner-img">
                    <img src={bannerPic}/>
                </div>
            </section>
        </header>
    )
}