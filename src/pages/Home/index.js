import React from 'react';
import { selectedPortfolios } from '../../mocks';
import './index.css';

const Home = () => {
  const randomIndex =
    Math.floor(Math.random() * (selectedPortfolios.length - 1)) + 1;
  const findPortfolio = selectedPortfolios.find(
    (i) => i.id === `sp${randomIndex}`
  );

  return (
    <>
      <div className="portfolio-wrapper">
        <div className="portfolio-frame">
          <iframe
            className="portfolio-iframe"
            src={findPortfolio.link}
            title="portfolio"
            onError={() => alert('Failed to load')}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
