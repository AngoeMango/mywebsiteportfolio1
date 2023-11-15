import './Styles/NavbarStyles.css'
import AngoeMangoLogo from './Images/AngoeMangoLogo.png'

function Navbar() {
    return (
        <nav class="navbar">
            <div class="nav_left">
                <a href="#" class="logo">AngoeMango</a>
            </div>
            <div class="nav_right">
                <a href="#" data-replace="about"><span>about</span></a>
                <a href="#" data-replace="work"><span>work</span></a>
                <a href="#" data-replace="resume"><span>resume</span></a>
                <a href="#" data-replace="contact"><span>contact</span></a>
            </div>
        </nav>
    )
}

export default Navbar