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
        <IFrame filterPortfolio={notPublishedPortolios} votesCount={() => {}} />
      </div>
    </>
  );
};

export default Favourites;
