import React from "react";
import Button from "../atomes/Button";


function contact() {
    return (
        <div className="sectionContact">
            <span>
                04. What’s Next?
            </span>
            <h2>
                Get In Touch
            </h2>
            <p>
                Although I’m not currently looking for any new opportunities,
                my inbox is always open. Whether you have a question or
                just want to say hi, I’ll try my best to get back to you!
            </p>

            <div className="buttonContainer">
                <Button text="Say Hello" link={"mailto:michel@kinshasadigital.com"} />
            </div>
        </div>

    )
}
export default contact;