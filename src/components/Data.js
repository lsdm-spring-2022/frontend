import React, { useState, useEffect } from 'react';

import { getData } from '../apis/data';

const Data = () => {
  const [currentData, setCurrentData] = useState('');
  const [region, setRegion] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

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
    if (startYear > endYear)
      console.log(
        "You can't finish before you start! Pick a valid range of years."
      );
    else {
      console.log(region);
      console.log(startYear);
      console.log(endYear);
    }
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
          type="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startYear">Starting Year </label>
        <input
          id="startYear"
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endYear">Ending Year </label>
        <input
          id="endYear"
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        />
      </div>
      <button type="submit">Click me!</button>
    </form>
  );
};

export default Data;
