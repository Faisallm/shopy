import React from 'react'
import './footer.css';
import footer_logo from '../Assets/logo_big.png';
import IGIcon from '../Assets/instagram_icon.png';
import PINIcon from '../Assets/pintester_icon.png';
import WHATIcon from '../Assets/whatsapp_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Logo of the footer" />
            <p>Shopper</p>
        </div>

        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={IGIcon} alt="Instagram Icon" />
            </div>
            <div className="footer-icons-container">
                <img src={PINIcon} alt="Pinterest Icon" />
            </div>
            <div className="footer-icons-container">
                <img src={WHATIcon} alt="Whatsapp Icon" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer