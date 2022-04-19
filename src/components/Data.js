import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { getSocialMediaData } from '../apis/data';

const Data = () => {
  const [region, setRegion] = useState('US');
  const [startDate, setStartDate] = useState('2012-01-01');
  const [endDate, setEndDate] = useState('2021-12-31');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);

  async function submitRequest(e) {
    e.preventDefault();
    if (region === '') console.log('You must select a region.');
    else if (startDate > endDate) console.log('Invalid date range.');
    else if (!reddit && !twitter)
      console.log('You need to pick at least one site!');
    else await getSocialMediaData(region, startDate, endDate, reddit, twitter);
  }

  return (
    <form onSubmit={submitRequest}>
      <div>
        <h2>Data from API</h2>
      </div>
      <select
        className="ui search dropdown"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="" label="Select Country" />
        <option value="US" label="United States" />
        <option value="UK" label="United Kingdom" />
        <option value="France" label="France" />
      </select>
      <div>
        Starting Date&nbsp;&nbsp;
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        Ending Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <Checkbox
          label="Reddit"
          id="reddit"
          checked={reddit}
          onChange={() => setReddit(!reddit)}
        />
      </div>
      <div>
        <Checkbox
          label="Twitter"
          id="twitter"
          checked={twitter}
          onChange={() => setTwitter(!twitter)}
        />
      </div>
      <button className="ui right labeled icon button" type="submit">
        <i className="search icon" />
        Click me!
      </button>
    </form>
  );
};

export default Data;
