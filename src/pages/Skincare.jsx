import React from "react";
import "./skincare.css";
function Skincare() {
  return (
    <div className="sk-container">
    <div className="row">
      <h1>WE PERSONALIZE SKINCARE</h1>
      <p>to make a postive impact in people's lives</p>
    </div>
      <div className="row px-5 mt-5">
        <div className="col">
            <h5>Personalized Facials</h5>
            <p className="px-4 mt-4"><b>No two faces are alike.</b>We get to know you and your skin to tailor the right treatment to help you reach your skincare goals.</p>
            <br/>
            <p><a href="https://app.mulearn.org/profile/arunknair@mulearn" style={{ textDecoration: 'none' }}>shop now</a></p>

        </div>
        <div className="col">
            <h5>Curated Products</h5>
            <p className="px-4 mt-4"><b>What you use matters.</b>Ingredients are at the core of skincare, so we educate you and recommend you the best products.</p>
            <br/>
            <p><a href="https://app.mulearn.org/profile/arunknair@mulearn" style={{ textDecoration: 'none' }}>shop now</a></p>

        </div>
        <div className="col">
            <h5>Personalized Facials</h5>
            <p className="px-4 mt-4"><b>Skincare is our obsession.</b>We're a team of Licensed Esteticians who can't wait to share what we know with you.</p>
            <br/>
            <p><a href="https://app.mulearn.org/profile/arunknair@mulearn" style={{ textDecoration: 'none' }}>shop now</a></p>
        </div>
       
      </div>
    </div>
  );
}

export default Skincare;
