import React from 'react';
import { FaLinkedinIn, FaGithub, FaFreeCodeCamp } from 'react-icons/fa';
import { SiHackerearth } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ history }) => {
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   history.push('/https://mail-list.vercel.app/');
  // };
  return (
    <footer>
      <section className="footer-main">
        <div className="footer-main-item">
          <h2 className="footer-title">About</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </div>
        <div className="footer-main-item">
          <h2 className="footer-title">Resources</h2>
          <ul>
            <li>
              <a href="https://mern-hacker-ranking-sys.herokuapp.com/doc">
                Docs
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-main-item">
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li>
              <a
                href="https://anitkumar-portfolio.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Developer Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-main-item">
          <h2 className="footer-title">Newsletter</h2>
          <p>Subscribe to our newsletter.</p>
          <form
            action="https://mail-list.vercel.app/register?redirect=/"
            target="_blank"
          >
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
          <li>© 2021 Design & Developed By Anit</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
