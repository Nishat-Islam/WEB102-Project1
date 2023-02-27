import './Card.css'

const Card = (props) => {
    const {image, title, fact, link} = props
    return (
        <div className = "card">
            <figure> 
                < img src = {image}/>
            </figure>
            <h3> {title} </h3>
            <p> {fact} </p>
            <button>
                <a href = {link} target = "_blank"> Learn More </a>
            </button>
        </div>
    )
}

export default Card