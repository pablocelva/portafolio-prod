import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav>
      <div className="nav-logos">
        <Link className="img-logo-nav" to="/">
          PROD
        </Link>

        {/* Botón hamburguesa */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Links del menú */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>About</Link>
        </li>
        <li>
          <Link to="/contacto" onClick={handleLinkClick}>Contacto</Link>
        </li>
      {/* Redes sociales */}
      <div className="logos">
        <a href="https://www.spotify.com" target="_blank" rel="noreferrer">
          <FaSpotify className="inline w-6 h-6 hover:text-green-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="inline w-6 h-6 hover:text-pink-400" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="inline w-6 h-6 hover:text-red-400" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="inline w-6 h-6 hover:text-blue-400" />
        </a>
      </div>
      </ul>

    </nav>
  );
}
