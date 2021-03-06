import React, { useState, useEffect } from 'react';
import { portfolios } from '../../mocks';
import IFrame from '../../components/IFrames';
import NotFound from '../../static/images/not-found.png';

const Portfolios = ({ location }) => {
  const [portfoliosData, setPortfoliosData] = useState(portfolios);
  const [sortType, setSortType] = useState('desc');

  const searchKey = location.search ? location.search.split('=')[1] : '';

  const votesCount = (vote, id) => {
    const count = Number(vote) + 1;
    // increase by one and send to server for storing
    alert(
      `Vote count has been inceased from ${vote} to ${count} Ready for submission to server`
    );
    console.log('count', count);
  };

  const sortByOrder = (type) => {
    let sortedData;
    if (type === 'asc') {
      sortedData = [...portfolios].sort((a, b) => a.votes - b.votes);
    } else if (type === 'desc') {
      sortedData = [...portfolios].sort((a, b) => b.votes - a.votes);
    }
    setPortfoliosData(sortedData);
  };
  useEffect(() => {
    sortByOrder(sortType);
    if (searchKey !== '') {
      const filterPortfolio = portfolios.filter((p) => {
        return p.websiteName.toLowerCase().includes(searchKey.toLowerCase());
      });
      setPortfoliosData(filterPortfolio);
    }
  }, [sortType, searchKey]);

  return (
    <div className="wrapper">
      <div className="sort-votes">
        <h3 className="sort-votes-title">
          <i>My Creations</i>
        </h3>
        <div className="sort-select">
          Sort By Votes{' '}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="sort-select-box"
            defaultValue="desc"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <br />
      </div>

      <IFrame filterPortfolio={portfoliosData} votesCount={votesCount} />
      {portfoliosData.length === 0 && (
        <>
          <img src={NotFound} width="100%" height="auto" alt="not found" />
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            <b>Sorry, No Result Found!</b>
          </p>
        </>
      )}
    </div>
  );
};

export default Portfolios;
