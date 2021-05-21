import React from 'react';
import { FaStar } from 'react-icons/fa';

const IFrame = ({ filterPortfolio, votesCount }) => {
  const htmlDoc = `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
                   <p>This iFrame doesn't have link</p>
                  </div>`;
  return (
    <>
      <div className="flex-grid container">
        {filterPortfolio &&
          filterPortfolio.map((portfolio) => (
            <div className="flex-grid-item iframe-container" key={portfolio.id}>
              {portfolio.link !== '' ? (
                <iframe
                  width="600px"
                  height="780px"
                  src={portfolio.link}
                  title={portfolio.name}
                  onError={() => alert('Failed to load')}
                ></iframe>
              ) : (
                <iframe
                  width="600px"
                  height="690px"
                  src={portfolio.link}
                  srcDoc={htmlDoc}
                  title={portfolio.name}
                  onError={() => alert('Failed to load')}
                ></iframe>
              )}

              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  width: '100%',
                  zIndex: '333',
                  height: '50px'
                }}
                className="flex-container"
              >
                <div
                  // style={{
                  //   width: '30%',
                  //   marginLeft: 'auto',
                  //   marginRight: 'auto'
                  // }}
                  className="flex-item-left"
                >
                  <a href={portfolio.link} target="_blank" rel="noreferrer">
                    <button className="btn btn--green btn--animated">
                      Go To Page
                    </button>
                  </a>
                </div>
                <div className="stars flex-item-right">
                  <FaStar
                    onClick={() =>
                      votesCount(`${portfolio.votes}`, `${portfolio.id}`)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default IFrame;
