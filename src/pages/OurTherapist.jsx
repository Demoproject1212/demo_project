import React from "react";
import './Therapist.css';
function OurTherapist() {

    const therapistData = [
        {
            name: "Nat Reynolds",
            caption: "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
            image: "image1.jpeg",
        },
        {
            name: "Bertie Norton",
            caption: "Aenean pulvinar dul ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
            image: "image2.jpeg",
        },
        {
            name: "Mattie Smith",
            caption: "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus.",
            image: "image3.jpeg",
        },
    ];

    return (
        <div className="container"> {/* Use className instead of style */}
            <h1 className="heading">OUR SKIN CARE EXPERTS</h1> {/* Use className instead of style */}
            <p className="caption"> {/* Use className instead of style */}
                Skincare's not just our job - it's our obsession. A persistent search for the best products and techniques. A love of using our hands to heal. And a commitment to empowering you to better your skin every day.
            </p>
            <div className="profile-container"> {/* Use className instead of style */}
                {therapistData.map((therapist, index) => (
                    <div key={therapist.name} className="profile"> {/* Use className instead of style */}
                        <img
                            src={therapist.image}
                            alt={therapist.name}
                            className="image" 
                        />
                        <p className="caption">{therapist.caption}</p> {/* Use className instead of style */}
                        <p className="name">{therapist.name}</p> {/* Use className instead of style */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTherapist;