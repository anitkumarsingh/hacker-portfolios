import React from 'react';
import { selectedPortfolios } from '../../mocks';
import './index.css';

const Home = () => {
  const randomIndex =
    Math.floor(Math.random() * (selectedPortfolios.length - 1)) + 1;
  const findPortfolio = selectedPortfolios.find(
    (i) => i.id === `sp${randomIndex}`
  );
  console.log('asdas', findPortfolio.link);
  return (
    <>
      <div className="portfolio-wrapper">
        <div className="portfolio-frame">
          <iframe
            className="portfolio-iframe"
            src={findPortfolio.link}
            title="portfolio"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
