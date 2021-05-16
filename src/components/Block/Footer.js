import React from 'react';
import { FaLinkedinIn, FaGithub, FaFreeCodeCamp } from 'react-icons/fa';
import { SiHackerearth } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer2 = () => {
  return (
    <footer>
      <section className="footer-main">
        <div className="footer-main-item">
          <h2 className="footer-title">About</h2>
          <ul>
            <li>
              <Link to="/">
                <a href="#/">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <a href="#/">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link to="/favourites">
                <a href="#/">Favourites</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-main-item">
          <h2 className="footer-title">Resources</h2>
          <ul>
            <li>
              <a href="#/">Docs</a>
            </li>
          </ul>
        </div>
        <div className="footer-main-item">
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li>
              <a href="#/">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-main-item">
          <h2 className="footer-title">Newsletter</h2>
          <p>Subscribe to our newsletter.</p>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </section>

      <section className="footer-social">
        <ul className="footer-social-list">
          <li>
            <a href="https://www.freecodecamp.org/anitkumar" target="blank">
              <FaFreeCodeCamp />
            </a>
          </li>
          <li>
            <a href="https://www.hackerearth.com/@anitkumar123" target="blank">
              <SiHackerearth />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anit-kumar" target="blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/anitkumarsingh" target="blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </section>

      <section className="footer-legal">
        <ul className="footer-legal-list">
          <li>
            <a href="#/">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#/">Privacy Policy</a>
          </li>
          <li>© 2021 Design and Developed By Anit Kumar</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer2;