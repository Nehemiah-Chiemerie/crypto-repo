import "./Status.scss"
import StatusImg from "../../assets/status.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Status = () => {
    useEffect(() => {
      Aos.init({ duration:1000 })
    })
    
  return <section className="status">
    <div className="status_container wrapper">
       <div className="status_left" data-aos="zoom-in-up">
            <h2>Trust us due to our safe and convenient deposit</h2>
            <p>
                Your assets are fully secured with our state-of-the-art encryption and multi-layered security protocols. 
                Our platform is designed to protect,ensuring a safe and trustworthy experience.
            </p>
            <a href="#" className="btn">
                KNOW MORE
            </a>
       </div>
       <div className="status_right" data-aos="fade-left">
            <img src={StatusImg} alt="status" />
       </div>
    </div>
  </section>
}

export default Status