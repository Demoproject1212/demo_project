import React from "react";
import './Spa.css';

const cardData = [
    {
        title: "WE OFFER A WIDE",
        title2: "SELECTION OF",
        title3: "SPA SERVICES"
    },
    {
        description: "Body treatments care for the skin of the whole body!",
        description1: "Whether you're looking to slough your skin to perfection, or tone & detoxify your whole body, we've got a treatment for you.",
        button: "Learn More",
    },
    {
        description1: "Body treatments care for the skin of the whole body!",
        description2: "Whether you're looking to slough your skin to perfection, or tone & detoxify your whole body, we've got a treatment for you.",
        description: "Lorem Ipsum is simply dummy text of the printing...."
    }
];

function Spa() {
    return (
        <div className="card-container ">
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="card custom-card">
                            <div className="card-body">
                            <h5 className="card-title">
                    <b>{card.title}</b>
                    <br />
                    <span className="card-title"><b>{card.title2}</b></span>
                    <br />
                    <span className="card-title"><b>{card.title3}</b></span>
                </h5>
                                <h6 className="card-title"><i>{card.subtitle}</i></h6>
                                {card.description1 && (
                                 <p className={`card-title ${index === 1 ? 'bold-text' : ''}`}>{card.description1}</p>
                                )}
                                {card.description2 && (
                                <p className={`card-title ${index === 1 ? 'bold-text' : ''}`}>{card.description2}</p>
                                )}
                                {card.description && (
                                <p className={`card-title ${index === 1 ? 'bold-text' : ''}`}>{card.description}</p>
                                )}
                                {card.button && <button className="btn btn-dark">{card.button}</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Spa;
