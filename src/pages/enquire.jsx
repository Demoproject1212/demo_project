import React from "react";
import "./enquire.css";

function Enquire() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.9515968361!2d76.282667!3d10.7738943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dbbb19b433ff%3A0x451fe14b2f24198d!2sSurya%20Restaurant!5e0!3m2!1sen!2sin!4v1698337678359!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col">
        <div className="custom-form">
    <input type="text" className="custom-input" />
    <input type="text" className="custom-input" />
    <input type="text" className="custom-input2" />
    <button className="custom-button">SUBMIT</button>
</div>
        </div>
      </div>
    </div>
  );
}

export default Enquire;
