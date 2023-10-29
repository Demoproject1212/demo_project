import React from "react";
import './EverydaySkincare.css'; // Import the CSS file

function EverydaySkincare() {
    // Define the URL of the background image
    const backgroundImageUrl = "/spa4.jpg";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
    };

    return (
        <div className="everyday-container" style={containerStyle}>
            <div className="row">
                <div className="col text-center">
                    <div className="everyday-content-container">
                        <h1>SKINCARE FOR</h1>
                        <h1>EVERYDAY</h1>
                        <div className="everyday-para">
                            <p>We offer expert estheticians, a professional skin care line, and facials for every skin type.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EverydaySkincare;
