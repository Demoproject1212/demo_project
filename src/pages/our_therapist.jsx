import React from "react";

function OurTherapist() {
    const containerStyle = {
        backgroundColor: "#ccc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    };

    const headingStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
    };

    const captionStyle = {
        fontSize: "16px",
        maxWidth: "260px", // Reduced max width for the quote
        lineHeight: "1.5",
        marginBottom: "40px",
        textAlign: "center",
    };

    const profileContainerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginTop: "20px",
    };

    const profileStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
    };

    const imageStyle = {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
    };

    const nameStyle = {
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "16px",
    };

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
        <div style={containerStyle}>
            <h1 style={headingStyle}>OUR SKIN CARE EXPERTS</h1>
            <p style={captionStyle}>
                Skincare's not just our job - it's our obsession. A persistent search for the best products and techniques. A love of using our hands to heal. And a commitment to empowering you to better your skin every day.
            </p>
            <div style={profileContainerStyle}>
                {therapistData.map((therapist, index) => (
                    <div key={therapist.name} style={profileStyle}>
                        <img
                            src={therapist.image}
                            alt={therapist.name}
                            style={imageStyle}
                        />
                        <p style={captionStyle}>{therapist.caption}</p>
                        <p style={nameStyle}>{therapist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTherapist;