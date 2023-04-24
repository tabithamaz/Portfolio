import React from "react";
import { AiFillGithub} from "react-icons/ai"
import { AiFillInstagram} from "react-icons/ai"
import { FiTwitter} from "react-icons/fi"
import { FiLinkedin} from "react-icons/fi"
import { AiFillCodepenCircle} from "react-icons/ai"

function Home(){
    return(
        <>
    
            
            <div className="lefticons">
                <div className="socialsGrid">
                    <a href="" target='_blank'>
                        < AiFillGithub className="icon" /></a>
                    <a>< AiFillInstagram className="icon" /></a>
                    <a><FiTwitter className="icon" /></a>
                    <a><FiLinkedin className="icon" /></a>
                    <a><AiFillCodepenCircle className='icon' /></a>
                    <div className="line">
                    </div>
                </div>
                </div> 
            
        <section className="sectionHome">
        <div className="homeContainer">
        <h1 className="introText">
        Hi, my name is 
        </h1> 
        <h2 className="title">
            Michel buhendwa
        </h2>
        <h3 className="subtitle">
        I build things for the web.
        </h3>
        <p className="homeParagraph">
                    I'am a software engineer specializing
                    in building (and occasionally designing)
                    exceptional digital experiences.
                    Currently,I'm focused
                    on building accessible,
                    human-centered products at <span> upstatement</span>
        </p>
                <div className="LowerHomeSection">
                    <button className="containerBtn">
                        <a href="#contact" className="flex">
                            check out my course!
                        </a>
                    </button>
                
                </div>
        </div>
                    <div className="emailAdress">
                        <a href="https://mailto:michel@kinshasadigital.com" target="_blank" className="lien">
                            michel@kinshasadigital.com
                        </a>
                    
                    <div className="rightEmail">

                    </div>
                </div>
                
            </section>
           
        
        </>
    
    )
    

}

export default Home;