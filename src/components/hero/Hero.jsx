import "./Hero.scss"
import Mob from "../../assets/mob.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {

    useEffect(() => {
      Aos.init({ duration: 1000})
    }, [])
    
  return <section className="hero">
    <div className="hero_container wrapper">
        <div className="hero_left" data-aos="fade-right">
            <img src={Mob} alt="hero"/>
        </div>
        <div className="hero_right"  data-aos="zoom-in-up">
            <h1>Make easier your crypto transactions</h1>
            <p>Our cryptocurrency offers the best transaction experience, combining speed, security, and 
                reliability. With lightning-fast processing times, you can send and receive funds in seconds. 
                Our advanced security protocols ensure that your transactions are protected from fraud and tampering. 
                Experience the future of financial transactions with our cryptocurrency, where speed, security, and trust come together.
            </p>
            <a href="#" className="btn">
                TRY FOR FREE
            </a>
        </div>
    </div>
  </section>
}

export default Hero