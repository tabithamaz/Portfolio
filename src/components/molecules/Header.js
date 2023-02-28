import React, { useState } from 'react'
import image1 from "../../assets/Group2.png"

function Header() {
    const [clicked, setClicked] = useState(false)

    const changestate = () => {
        console.log('tab');
        setClicked(!clicked)
    }

    return (
        <>
            <div className="contener">
                <img src={image1} alt="logo" />
                <div className={clicked ? "navigationcontener  active" : "navigationcontener"} >
                    <nav className="navigation" >
                        <ul>
                            <li>
                                <a className='' href="#About"> <span>01. </span>About</a>
                            </li>
                            <li>
                                <a href="#experiences"> <span>02. </span>Experiences</a>
                            </li>

                            <li>
                                <a href="#work"><span> 03. </span>Work</a>
                            </li>

                            <li>
                                <a href="#contact" > <span>04. </span> contact</a>

                            </li>
                        </ul>
                    </nav>
                    <div className='fadedown-enter-done'>
                        <a className='resume-button' href='/resume.pdf' target='_b lank' rel='noopener norefferrer'>Resume</a>
                    </div>
                </div>
                <div className='contener-icon' style={{ color: 'white' }} onClick={changestate}>
                    {/* <i className=
                        {
                            clicked ? "fas fa-times" : "fa-solid fa-bars-sort"
                        }
                        style={{ color: 'white' }}
                    >MERCI
                    </i> */}
                    {clicked ? "OK" : <i class="fa-solid fa-bars-sort"></i>}
                </div>
            </div>
        </>
    )
}

export default Header;