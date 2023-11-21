import './Styles/NavbarStyles.css'
import AngoeMangoLogo from './Images/AngoeMangoLogo.png'

function Navbar() {
    return (
        <nav class="navbar">
            <div class="nav_left">
                <a href="#" class="logo">AngoeMango</a>
            </div>
            <div class="nav_right">
                <a href="#" data-replace="about" class="navbuttons"><span>about</span></a>
                <a href="#" data-replace="work" class="navbuttons"><span>work</span></a>
                <a href="#" data-replace="resume" class="navbuttons"><span>resume</span></a>
                <a href="#" data-replace="contact" class="navbuttons"><span>contact</span></a>
            </div>
        </nav>
    )
}

export default Navbar