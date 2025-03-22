import "./Subscribe.scss"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {

    useEffect(() => {
        Aos.init({ duration:1000 })
    })
    
  return <section className="subscribe">
    <div className="subscribe_container wrapper">
        <h2 data-aos="fade-up">Subscribe to get news updates</h2>
        <p data-aos="fade-up">
            Our platform utilizes military-grade encryption to safeguard your transactions and personal data. 
            Multi-layered security protocols and robust firewalls ensure maximum protection against potential threats. 
            Your assets are insured and held in secure, segregated accounts to prevent any loss or theft. 
        </p>
        <form action="#" data-aos="fade-up">
            <input type="email" placeholder="Write Your Email Here" />
            <a href="" className="btn">
                Subscribe
            </a>
        </form>
    </div>
  </section>
}

export default Subscribe