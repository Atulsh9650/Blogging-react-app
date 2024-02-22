import { Link } from "react-router-dom";

function Header() {
    return (  
    <header className="d-flex justify-content-center py-3 mainheader">
      <ul className="nav nav-pills">
        <li className="nav-item headerbuttons "><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
        <li className="nav-item headerbuttons"><Link to="/" className="nav-link">Latest</Link></li>
        <li className="nav-item headerbuttons"><Link to="/" className="nav-link">Most Rated</Link></li>
        <li className="nav-item headerbuttons"><Link to="/" className="nav-link">Most Viewed</Link></li>
      </ul>
    </header>
    );
}

export default Header;