import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Liens utiles</h3>
            <div>
                <h1 className='logoname'>FatStat.Football</h1>
            </div>
          </div>
          <div className="footer-section">
            <h3>Contactez-nous</h3>
            <p>ETU 2151 Mitia</p>
            <p>ETU 2238 Loick</p>
            <p>ETU 2147 Faly</p>        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
