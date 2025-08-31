import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <h2>PROD</h2>
            {/* <p>Portafolio 2025</p> */}
            {/* <ul className="icons links">  */}
                {/* <ul className={`nav-links ${open ? "open" : ""}`}> */}
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
      {/* </ul> */}
            {/* </ul> */}
        </footer>
    )
}