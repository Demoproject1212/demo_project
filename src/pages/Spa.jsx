import React from "react";
import './Spa.css';
const cardData = [
    {
        title: "We Offer A Wide",
        subtitle: "Selection Of",
        description: "Spa Services"
    },
    {
        title: "Body treatments care for the skin of the whole body!",
        subtitle: "Whether you're looking to slough your skin to perfection, or tone & detoxify your whole body, we've got a treatment for you.",
        button: "Learn More",
    },
    {
        title: "Body treatments care for the skin of the whole body!",
        subtitle: "Whether you're looking to slough your skin to perfection, or tone & detoxify your whole body, we've got a treatment for you.",
        description: "Lorem Ipsum is simply dummy text of the printing...."
    }
];

function Spa() {
    return (
        <div className="card-container container-fluid">
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title1"><b>{card.title}</b></h5>
                                <h5 className="card-title1"><b>{card.subtitle}</b></h5>
                                {card.description && <p className="card-text"><b>{card.description}</b></p>}
                                {card.button && <button className="btn btn-primary float-start">{card.button}</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default Spa;
