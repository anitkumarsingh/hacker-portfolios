import React from 'react';
import { FaStar } from 'react-icons/fa';

const IFrame = ({ filterPortfolio, votesCount }) => {
  const htmlDoc = `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
                   <p>This iFrame doesn't have link</p><br/>
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
                  height="730px"
                  src={portfolio.link}
                  title={portfolio.name}
                  onLoad={() => console.log('loading...')}
                  onError={() => alert('Failed to load')}
                ></iframe>
              ) : (
                <iframe
                  width="600px"
                  height="690px"
                  src={portfolio.link}
                  srcDoc={htmlDoc}
                  title={portfolio.name}
                  onLoad={() => console.log('loading...')}
                  onError={() => alert('Failed to load')}
                ></iframe>
              )}

              <div>
                <div>
                  <a href={portfolio.link} target="_blank" rel="noreferrer">
                    <button className="btn btn--green btn--animated">
                      Go To Page
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
      </div>
    </>
  );
};

export default IFrame;
