import './NavbarStyles.css'

function Navbar() {
    return (
        <nav className = "navbar">
            <div class = "nav_left">
                <a href="#"></a>
            </div>
            <div class = "nav_right">
                <a href="#" data-replace="about"><span>about</span></a>
                <a href="#" data-replace="work"><span>work</span></a>
                <a href="#" data-replace="resume"><span>resume</span></a>
                <a href="#" data-replace="contact"><span>contact</span></a>
            </div>
        </nav>
    )
}

export default Navbar