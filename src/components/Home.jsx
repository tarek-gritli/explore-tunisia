import React, { useEffect } from "react";
export default function Home()
{
    useEffect(()=>{
        const homeText=document.querySelector('.home-text');
        homeText.classList.add("slide-in");
        const iframe = document.querySelector("iframe");
        iframe.classList.add("slide-in-right");
    },[])
    return (
        <section id="home">
            <div className="home container embed-responsive embed-responsive-16by9">
                <h1 className="home-text">Explore<br />The<br />Beautiful<br />Tunisia</h1>
                <iframe 
                    width="1000" 
                    height="500" 
                    src="https://www.youtube.com/embed/OtJVufo3IrA?si=rdbRGyg8ZpO0Pllp&autoplay=1&mute=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    className="embed-responsive-item"
                    >
                </iframe>
            </div>
        </section>
    );
}