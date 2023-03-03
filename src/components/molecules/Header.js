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
                <div className={"navigationcontener  active"} >
                    <nav className={clicked ? "navigation visible" : "hidden"} >
                        <ul>
                            <li>
                                <a className='' href="#About"> <span>01.</span>About</a>
                            </li>
                            <li>
                                <a href="#experiences"> <span>02.</span>Experiences</a>
                            </li>

                            <li>
                                <a href="#work"><span> 03.</span>Work</a>
                            </li>

                            <li>
                                <a href="#contact" > <span>04.</span> contact</a>

                            </li>
                        </ul>
                        <div className='fadedown-enter-done'>
                            <a className='resume-button' href='/resume.pdf' target='_b lank' rel='noopener norefferrer'>Resume</a>
                        </div>
                    </nav>
                    {/* <div className='fadedown-enter-done'>
                        <a className='resume-button' href='/resume.pdf' target='_b lank' rel='noopener norefferrer'>Resume</a>
                    </div> */}
                </div>
                <div className='contener-icon' onClick={changestate}>
                    <i className=
                        {
                            !clicked ? "fas fa-times" : "fas fa-bars"
                        }
                    // style={{ color: 'white' }}
                    >
                    </i>

                </div>
            </div>
        </>
    )
}

export default Header;