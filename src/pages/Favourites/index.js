import React from 'react';
import { notPublishedPortolios } from '../../mocks';
import IFrame from '../../components/IFrames';

const Favourites = () => {
  const votesCount = (vote, id) => {
    const count = Number(vote) + 1;
    // increase by one and send to server for storing
    alert(
      `Vote count has been inceased from ${vote} to ${count}. Ready for submission to server`
    );
    console.log('count', count);
  };
  return (
    <>
      <div className="wrapper">
        <div className="sort-votes">
          <h3 className="sort-votes-title">
            <i>My Favourites</i>
          </h3>
          <br />
        </div>
        <IFrame
          filterPortfolio={notPublishedPortolios}
          votesCount={votesCount}
        />
      </div>
    </>
  );
};

export default Favourites;
