import React from 'react';
import { notPublishedPortolios } from '../../mocks';
import IFrame from '../../components/IFrames';

const Favourites = () => {
  return (
    <>
      <div className="wrapper">
        <div className="sort-votes">
          <h3 className="sort-votes-title">
            <i>My Favourites</i>
          </h3>
          <br />
        </div>
        {/* <div className="flex-grid container">
        {filterPortfolio &&
          filterPortfolio.map((portfolio) => (
            <div className="flex-grid-item iframe-container" key={portfolio.id}>
              <iframe
                width="600px"
                height="600px"
                src={portfolio.link}
                title={portfolio.name}
              ></iframe>
              <div>
                <div>
                  <a href={portfolio.link} target="_blank" rel="noreferrer">
                    <button className="btn btn--green btn--animated">
                      View
                    </button>
                  </a>
                </div>
                <div className="stars">
                  <FaStar
                    onClick={() =>
                      votesCount(`${portfolio.votes}`, `${portfolio.id}`)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
      </div> */}
        <IFrame filterPortfolio={notPublishedPortolios} votesCount={() => {}} />
      </div>
    </>
  );
};

export default Favourites;
