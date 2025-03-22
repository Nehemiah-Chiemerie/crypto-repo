import "./Footer.scss"
import Logo from "../../assets/logo.png"
import { 
    FaFacebookF, 
    FaInstagram, 
    FaTwitter,
    FaLinkedinIn, 
    FaYoutube 
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
      Aos.init({ duration:1000 })
    })
    
  return <section className="footer">
    <div className="footer_container wrapper" data-aos="fade-up">
        <div className="footer_col">
            <img src={Logo} alt="logo" />
            <p>
                Multi-layered security protocols and robust firewalls ensure maximum protection 
                against potential threats.
            </p>
        </div>
        <div className="footer_col">
            <h3>About</h3>
            <a href="#">about us</a>
            <a href="#">features</a>
            <a href="#">news</a>
        </div>
        
        <div className="footer_col">
            <h3>Company</h3>
            <a href="#">Cryptocode</a>
            <a href="#">Security</a>
            <a href="#">Rankings</a>
        </div>

        <div className="footer_col">
            <h3>Support</h3>
            <a href="#">FQS</a>
            <a href="#">Support</a>
            <a href="#">Contact us</a>
        </div>

        <div className="footer_col">
            <h3>Socials</h3>
            <div className="footer_icons">
                <a href="" className="footer_icon">
                    <FaFacebookF/>
                </a>
                <a href="" className="footer_icon">
                    <FaInstagram/>
                </a>
                <a href="" className="footer_icon">
                    <FaTwitter/>
                </a>
                <a href="" className="footer_icon">
                    <FaLinkedinIn/>
                </a>
                <a href="" className="footer_icon">
                    <FaYoutube/>
                </a>
            </div>
        </div>

    </div>
  </section>
}

export default Footer