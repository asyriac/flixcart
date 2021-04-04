const Navbar = () => {
    return (
        <nav className="nav bg-white sticky">
            <div className="nav-brand">
                <h2><a href="./index.html">Flixcart</a></h2>
            </div>
            <ul className="nav-link">
                <li className="nav-link-item"><a href="./index.html">
                    <div className="badge-container">
                        <i className="fas fa-heart icon-sm"></i>
                        <span className="badge-notification">2</span>
                    </div>
                </a></li>
                <li className="nav-link-item"><a href="./index.html">
                    <div className="badge-container">
                        <i className="fas fa-shopping-cart icon-sm"></i>
                        <span className="badge-notification">0</span>
                    </div>
                </a></li>
            </ul>
        </nav>
    )
}

export default Navbar;