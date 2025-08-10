import './Footer.css'
import { BiWorld } from "react-icons/bi";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
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
                
                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img src="../../../src/assets/logo.png" alt="HoYoverse Logo" />
                    </div>
                    <p className="footer-copyright">Copyright © COGNOSPHERE. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;