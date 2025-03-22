import './Navbar.scss'
import { IoMenu } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import Logo from '../../assets/logo.png'


const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

  return <header className="navbar">
    <nav className="navbar_container wrapper">
        <a href="#" className="navbar_logo" onClick={() => setShowNav(false)}>
            <img src={Logo} alt="logo" />
        </a>

        <ul className={`${showNav ? "show": ""}`}>
            <li onClick={() => setShowNav(false)}>
                <a href="#">product</a>
            </li>
            <li onClick={() => setShowNav(false)}>
                <a href="#">company</a>
            </li>
            <li onClick={() => setShowNav(false)}>
                <a href="#">pricing</a>
            </li>
            <li onClick={() => setShowNav(false)}>
                <a href="#">blog</a>
            </li>
        </ul>
        
        <div className="navbar_btns">
            <a href="#">login</a>
            <a href="#" className="btn">
                register
            </a>
        </div>

        <div className="navbar_menu" onClick={() => setShowNav(!showNav)}>
            {showNav ? <IoMdClose/> : <IoMenu/>}
        </div>
    </nav>
  </header>
}

export default Navbar