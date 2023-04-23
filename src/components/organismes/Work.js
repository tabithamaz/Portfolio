import React from "react";
import image3 from "../../assets/halcyon.avif"
import { FiGithub } from "react-icons/fi"
import { MdOpenInNew, MdOutlineFolder } from "react-icons/md";
import Button from "../atomes/Button";

function Work() {
    return (
        <>

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

                <div className="sectionProjets">
                    <div className="titleSection">
                        <h2>
                            Other Noteworthy Projects
                        </h2>
                        <span>

                            view the archive
                        </span>
                    </div>
                    <div className="archiveProjectList">

                        <div className="archiveProjectItem">
                            <div className="projetIcons">
                                <a>
                                    <MdOutlineFolder className="icon archiveProjectIcon" />
                                </a>
                                <a>
                                    <MdOpenInNew className="icon " />
                                </a>
                            </div>
                            <div className="projetDescription">
                                <h4>
                                    OctoProfile
                                </h4>
                                <p>
                                    Building a custom multisite
                                    compatible wordpress plugin to
                                    build global search with algoria
                                </p>
                                <ul>
                                    <li>
                                        Algoria
                                    </li>
                                    <li>
                                        WordPress
                                    </li>
                                    <li>
                                        PHP
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="archiveProjectItem">
                            <div className="projetIcons">
                                <a>
                                    <MdOutlineFolder className="icon archiveProjectIcon" />
                                </a>
                                <div>


                                    <a>
                                        < FiGithub className="icon" />
                                    </a>
                                    <a>< MdOpenInNew className="icon" /></a>
                                </div>

                            </div>
                            <div className="projetDescription">
                                <h4>
                                    OctoProfile
                                </h4>
                                <p>
                                    Building a custom multisite
                                    compatible wordpress plugin to
                                    build global search with algoria
                                </p>
                                <ul>
                                    <li>
                                        Algoria
                                    </li>
                                    <li>
                                        WordPress
                                    </li>
                                    <li>
                                        PHP
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="archiveProjectItem">
                            <div className="projetIcons">
                                <a>
                                    <MdOutlineFolder className="icon archiveProjectIcon" />
                                </a>
                                <a>
                                    <MdOpenInNew className="icon " />
                                </a>
                            </div>
                            <div className="projetDescription">
                                <h4>
                                    OctoProfile
                                </h4>
                                <p>
                                    Building a custom multisite
                                    compatible wordpress plugin to
                                    build global search with algoria
                                </p>
                                <ul>
                                    <li>
                                        Algoria
                                    </li>
                                    <li>
                                        WordPress
                                    </li>
                                    <li>
                                        PHP
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="archiveProjectItem">
                            <div className="projetIcons">
                                <a>
                                    <MdOutlineFolder className="icon archiveProjectIcon" />
                                </a>
                                <div>


                                    <a>
                                        < FiGithub className="icon" />
                                    </a>
                                    <a>< MdOpenInNew className="icon" /></a>
                                </div>
                            </div>
                            <div className="projetDescription">
                                <h4>
                                    OctoProfile
                                </h4>
                                <p>
                                    Building a custom multisite
                                    compatible wordpress plugin to
                                    build global search with algoria
                                </p>
                                <ul>
                                    <li>
                                        Algoria
                                    </li>
                                    <li>
                                        WordPress
                                    </li>
                                    <li>
                                        PHP
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <Button text="Load More" />
                </div>
            </div>
        </>
    )
}


export default Work;