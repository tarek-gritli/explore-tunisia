import React from "react";
import data from "../data";
import Destination from "./Destination";
export default function Destinations() {
    const cards=data.map((d)=>{
        return <Destination key={d.id} {...d} />;
    })
    return (
        <section id="destinations" className="container">
            <h2 className="destinations-section">Destinations</h2>
            <hr />
            {cards}
        </section>
    );
}