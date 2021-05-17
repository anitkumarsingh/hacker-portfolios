import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { SiReact } from 'react-icons/si';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('search', searchTerm, history);
    history.push(`/portfolio?searchTerm=${searchTerm}`);
  };
  return (
    <nav className="sticky">
      <div className="menu-icon">
        <span className="fas fa-bars" />
      </div>
      <div className="logo">
        <SiReact /> Hacker Portfolio
      </div>
      <div className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolios</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </div>
      <div className="search-icon">
        <FaSearch style={{ color: 'white' }} />
      </div>
      <div className="cancel-icon">
        <span className="fas fa-times" />
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="search"
          className="search-data"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="fas fa-search" />
      </form>
    </nav>
  );
};

Header.propTypes = {};

export default Header;
