import React from "react";
import image2 from "../../assets/Michel photo.jpeg"

function About(){
    return(

        <div className="sectionTitle">
            <div className="line1"></div>
            <h2 className="titleText"><span >01.
            </span>About Me</h2>
            
        <div className="underline"> <span></span></div>
        <div className="contenerAbout">
        <div className="textSection">
            <p>
                Hello! My name is Brittany and I enjoy creating 
                things that live on the internet. My interest in web 
                development started back in 2012 when I decided to try editing 
                custom Tumblr themes — turns out hacking together 
                a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                    Fast-forward to today, and I’ve had the privilege of working at
                    <a href="" rel="noopener no referrer" target="_blank">an advertising agency</a> 
                    ,<a>a start-up</a> ,
                    <a href="">a huge corporation</a>
                    ,and
                    <a href="" rel="" target='_blank'> a student-led design studio
                    </a>
                    .My main focus these days is building 
                    accessible, inclusive products and digital experiences at
                    <a href="" rel="" target="_blank">Upstatement </a> 
                    for a variety of clients.
                </p>
                <p> I also recently
                    <a  href="" rel="" target="_blank">launched a course</a>  
                    that covers everything
                    you need to build a web app with the Spotify API
                    using Node & React.
                </p>
                <p>
                    Here are a few technologies I’ve been 
                    working with recently:
            
                </p>
                <ul className="skillsList">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li> React</li>
                    <li>Eleventy</li>
                    <li>Node.js</li>
                    <li>WordPress</li>
                </ul>
                <div className="line3">
                </div>
        </div>
                <div className="aboutImgDiv">
                <img src={image2} alt="michel buhedwe"/>
                </div>

        </div>

        </div>
    )

};

export default About;