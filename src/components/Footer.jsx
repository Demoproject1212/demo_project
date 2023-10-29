import React from "react";
import "./footer.css";
function Footer() {
    return (
        <footer className="footer">
            <div className="row">
                    <div className="col-md-4">
                        <p>Sample footer text</p>
                    </div>
                    <div className="col-md-4">
                        <p>Logo</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
