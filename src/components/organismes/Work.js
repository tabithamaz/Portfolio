import React from "react";
import image3 from "../../assets/halcyon.avif"
import { FiGithub } from "react-icons/fi"
import { MdOpenInNew } from "react-icons/md"

function Work() {
    return (


        <div className="work">




            <div className="sectionTitle">
                <div className="line-work"></div>
                <h2 className="titleText"><span >03.
                </span>Some Things I’ve Built</h2>

                <div className="underline"> <span></span></div></div>

            <div className="cardWork">
                <div className="workImageContainer">

                    <img src={image3} alt="" />
                </div>

                <div className="details">
                    <div className="projectTitle">
                        <span>Featured Project</span>
                        <h3>Halcyon Theme</h3>
                    </div>
                    <div className="description">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                            Available on Visual Studio Marketplace,
                            Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <div className="technologiesUtilisees">
                        <ul>
                            <li>
                                VS Code
                            </li><li>
                                Sublime Text
                            </li><li>
                                Atom

                            </li><li>
                                iTerm2

                            </li><li>
                                Hyper

                            </li>
                        </ul>
                    </div>
                    <div className="projectLink">
                        <ul>
                            <li>< FiGithub className="icon" />
                            </li>
                            <li>< MdOpenInNew className="icon" /></li>
                        </ul>
                    </div>
                </div>



            </div>
            <div className="cardWork">

                <div className="details detailsSecondProject">
                    <div className="projectTitle">
                        <span>Featured Project</span>
                        <h3>Halcyon Theme</h3>
                    </div>
                    <div className="description">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                            Available on Visual Studio Marketplace,
                            Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <div className="technologiesUtilisees">
                        <ul>
                            <li>
                                VS Code
                            </li><li>
                                Sublime Text
                            </li><li>
                                Atom

                            </li><li>
                                iTerm2

                            </li><li>
                                Hyper

                            </li>
                        </ul>
                    </div>
                    <div className="projectLink">
                        <ul>
                            <li>< FiGithub className="icon" />
                            </li>
                            <li>< MdOpenInNew className="icon" /></li>
                        </ul>
                    </div>
                </div>

                <div className="workImageContainer">

                    <img src={image3} alt="" />
                </div>


            </div>



            <div className="cardWork">
                <div className="workImageContainer">

                    <img src={image3} alt="" />
                </div>

                <div className="details">
                    <div className="projectTitle">
                        <span>Featured Project</span>
                        <h3>Halcyon Theme</h3>
                    </div>
                    <div className="description">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
                            Available on Visual Studio Marketplace,
                            Package Control, Atom Package Manager, and npm.</p>
                    </div>
                    <div className="technologiesUtilisees">
                        <ul>
                            <li>
                                VS Code
                            </li><li>
                                Sublime Text
                            </li><li>
                                Atom

                            </li><li>
                                iTerm2

                            </li><li>
                                Hyper

                            </li>
                        </ul>
                    </div>
                    <div className="projectLink">
                        <ul>
                            <li>< FiGithub className="icon" />
                            </li>
                            <li>< MdOpenInNew className="icon" /></li>
                        </ul>
                    </div>
                </div>



            </div>

        </div>
    )
}


export default Work;