import react from "react"

function Button({ text, link }) {
    return (
        <button className="containerBtn" >

            <a href={`${link}`} className="flex">
                {text}
            </a>

        </button>
    )
}

export default Button;