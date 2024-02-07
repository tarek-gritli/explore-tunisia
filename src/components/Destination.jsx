import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
export default function Destination({name, location, description, imageUrl, url}) {
    return (
        <article>
            <div className="destination-header">
                <img src={imageUrl} className="destination-img" alt={name} />
                <div className="destination-info">
                    <div className="icon-location">
                        <FontAwesomeIcon icon={faMapPin} size="lg" className="icon" /><span className="text-muted location">{location}</span>
                    </div>
                    <h3 className="destination-name">{name}</h3>
                    <p className="lead destination-description">{description}</p>
                    <a href={url} target="_blank" className="destination-link">See more</a>
                </div>
            </div>
            <hr />
        </article>
    );
}
