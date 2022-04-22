import "./cards.css"
import data from "./data"
import loc from "./img/tag.png"


export default function Card(props){
    return(
        <section className="card__container">
            <div className="card__container--columns">
                <img className="card__container--img" src={props.item.imageUrl} alt=""></img>
                <div className="card__container--text">
                    <div className="card__container--location">
                        <img className="loc-tag" src={loc} alt=""></img>
                        <p className="loc-country">{props.item.location}</p>
                        <a className="loc-googlemaps" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="title">{props.item.title}</h1>
                    <h2 className="date">{props.item.startDate} - {props.item.endDate}</h2>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>


        </section>

    )
}