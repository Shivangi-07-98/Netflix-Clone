import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-column">
            <div className="footer-row">
              <p className="grey-text">Audio Description</p>
              <p className="grey-text">Investor Relations</p>
              <p className="grey-text">Legal Notices</p>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-row">
              <p className="grey-text">Help Centre</p>
              <p className="grey-text">Jobs</p>
              <p className="grey-text">Cookie Preferences</p>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-row">
              <p className="grey-text">Gift Cards</p>
              <p className="grey-text">Terms of Use</p>
              <p className="grey-text">Corporate Information</p>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-row">
              <p className="grey-text">Media Centre</p>
              <p className="grey-text">Privacy</p>
              <p className="grey-text">Contact Us</p>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <div className="left-bottom">
            <button className="service-code">Service Code</button>

          <div>
          <p className="grey-text">&copy; 1997-2024 Netflix, Inc.</p>
          </div>

          </div>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;
