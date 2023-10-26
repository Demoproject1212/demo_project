import React from "react";
import './Spa.css';

function Spa() {
    return (
        <div className="card-container">
            <div className="row">
                <div className="col-4">
                    <div className="card custom-card">
                        <div className="card-body">
                            <h5 className="card-title1"><b>We Offer A Wide</b></h5>
                            <h5 className="card-title1"><b>Selection Of</b></h5>
                            <h5 className="card-title1"><b>Spa Services</b></h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card custom-card card-right">
                        <div className="card-body1">
                            <p className="card-text"><b>Body treatments care for the skin of the whole body! Whether you're looking to slough your skin to perfection, or tone & detoxify your whole body, we've got a treatment for you. Lorem Ipsum is simply dummy text of the printing....</b></p>
                            <button className="btn btn-primary float-start">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card custom-card card-right">
                        <div className="card-body1">
                            <p className="card-text">Body treatments care for the skin of the whole body! Whether you're looking to slough your skin to perfection, or tone & detoxify your whole body, we've got a treatment for you. Lorem Ipsum is simply dummy text of the printing....</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Spa;
