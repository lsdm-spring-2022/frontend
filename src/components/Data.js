import React, { useState, useEffect } from 'react';
import { start } from 'repl';

import { getData } from '../apis/data';

const Data = () => {
  const [currentData, setCurrentData] = useState('');
  const [region, setRegion] = useState('US');
  const [startDate, setStartDate] = useState('2012-01-01');
  const [endDate, setEndDate] = useState('2020-12-31');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);
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
    if (region === '') console.log('You must select a region.');
    else if ((startDate === '' && endDate === '') || startDate > endDate)
      console.log('Invalid date range.');
    else if (!reddit && !twitter)
      console.log('You need to pick at least one site!');
    else
      getSocialMediaData(region, startDate, endDate, reddit, twitter);
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
      <div className="ui checked checkbox">
        <label htmlFor="reddit">Reddit </label>
        <input
          id="reddit"
          type="checkbox"
          checked={reddit}
          onChange={() => setReddit(!reddit)}
        />
      </div>
      <div className="ui checked checkbox">
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
