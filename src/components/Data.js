import React, { useState, useEffect } from 'react';

import { getData } from '../apis/data';

const Data = () => {
  const [currentData, setCurrentData] = useState('');
  const [region, setRegion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const dataRequest = {
    reddit: false,
    twitter: false,
    region: '',
    startDate: null,
    endDate: null,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setCurrentData(`API says: ${response.message}`);
      } catch (err) {
        setCurrentData(null);
      }
    };

    fetchData();
  }, []);

  function doTest(e) {
    e.preventDefault();
    dataRequest.reddit = reddit;
    dataRequest.twitter = twitter;
    dataRequest.region = region;
    dataRequest.startDate = startDate;
    dataRequest.endDate = endDate;
    if (startDate > endDate)
      console.log(
        "You can't finish before you start! Pick a valid range of dates."
      );
    else if (!reddit && !twitter)
      console.log('You need to pick at least one site!');
    else console.log(dataRequest);
  }

  return (
    <form onSubmit={doTest}>
      <div>
        <h2>Data from API</h2>
        {currentData}
      </div>
      <div>
        <label htmlFor="region">Region </label>
        <input
          id="region"
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Starting Date </label>
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
        <label htmlFor="twitter">Twitter </label>
        <input
          id="twitter"
          type="checkbox"
          checked={twitter}
          onChange={() => setTwitter(!twitter)}
        />
      </div>
      <button type="submit">Click me!</button>
    </form>
  );
};

export default Data;
