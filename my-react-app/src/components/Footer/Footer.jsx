import './Footer.css'

import { BiWorld } from "react-icons/bi";

const Footer = () => {
    return (
        <footer>
        <div className="footer-info">
            <p>Home</p>
            <p>News</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Business Affairs</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Help Center</p>
        </div>
        <div className="footer-logo">
            <img src="../../../src/assets/logo.png" alt="Logo" />
            <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
        </div>
        <div className='world-icon'>
            <BiWorld />
        </div>
        </footer>
    )
}

export default Footer;