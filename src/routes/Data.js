import React, { useState } from 'react';

import { getSampleData } from '../sample-data/get-sample-data';

const Data = () => {
  const [regionState, setRegionState] = useState('US');
  const [startDate, setStartDate] = useState('2012-01-01');
  const [endDate, setEndDate] = useState('2021-12-31');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [redditData, setRedditData] = useState([]);

  const getFakeRedditData = () => {
    try {
      const response = getSampleData();
      setRedditData(response.reddit);
    } catch (err) {
      console.error(err);
      setRedditData([]);
    }
  };

  async function submitRequest(e) {
    e.preventDefault();
    if (regionState === '') console.log('You must select a region.');
    else if (startDate > endDate) console.log('Invalid date range.');
    else if (!reddit && !twitter)
      console.log('You need to pick at least one site!');
    else {
      // await getSocialMediaData(region, startDate, endDate, reddit, twitter)
      getFakeRedditData();
    }
  }

  const renderForm = () => (
    <>
      <h2>Submit Data Request</h2>
      <form onSubmit={submitRequest}>
        <div>
          <label htmlFor="region">Region </label>
          <input
            id="region"
            type="text"
            value={regionState}
            onChange={(e) => setRegionState(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startDate">Starting Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endDate">Ending Date </label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="reddit">Reddit </label>
          <input
            id="reddit"
            type="checkbox"
            checked={reddit}
            onChange={() => setReddit(!reddit)}
          />
        </div>
        <div>
          <label htmlFor="twitter">Twitter </label>
          <input
            id="twitter"
            type="checkbox"
            checked={twitter}
            onChange={() => setTwitter(!twitter)}
          />
        </div>
        <button type="submit">Click me!</button>
        <button type="button" onClick={() => setRedditData([])}>
          Clear Data
        </button>
      </form>
    </>
  );

  const renderData = () => {
    if (redditData.length > 0) {
      return (
        <>
          <h2>Reddit Data</h2>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Subreddit</th>
                <th>Post Title</th>
                <th>Upvotes</th>
                <th>Date Stored</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {redditData.map(
                ({
                  datePosted,
                  region,
                  subreddit,
                  postTitle,
                  upvotes,
                  dateStored,
                  comments,
                }) => (
                  <tr key={datePosted}>
                    <td data-label="region">{region}</td>
                    <td data-label="subreddit">{subreddit}</td>
                    <td data-label="postTitle">{postTitle}</td>
                    <td data-label="upvotes">{upvotes}</td>
                    <td data-label="dateStored">{dateStored}</td>
                    <td data-label="comments">{comments}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </>
      );
    }
    return null;
  };

  return (
    <div>
      {renderForm()}
      {renderData()}
    </div>
  );
};

export default Data;
