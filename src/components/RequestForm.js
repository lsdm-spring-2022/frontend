import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Header } from 'semantic-ui-react';

import { getSampleData } from '../sample-data/get-sample-data';

const RequestForm = ({ updateParentRedditData }) => {
  const [regionState, setRegionState] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);

  const handleRegionChange = (e, data) => {
    setRegionState(data.value);
  };

  const handleResetForm = () => {
    setRegionState('');
    setStartDate('');
    setEndDate('');
    setReddit(false);
    setTwitter(false);
    updateParentRedditData([]);
  };

  const getFakeRedditData = () => {
    try {
      const response = getSampleData();
      updateParentRedditData(response.reddit);
    } catch (err) {
      console.error(err);
      updateParentRedditData([]);
    }
  };

  const submitRequest = async (e) =>{
    e.preventDefault();
    if (regionState === '') console.log('You must select a region.');
    else if (startDate > endDate) console.log('Invalid date range.');
    else if (!reddit && !twitter)
      console.log('You need to pick at least one site!');
    else {
      //await getSocialMediaData(regionState, startDate, endDate, reddit, twitter);
      getFakeRedditData();
    }
  };

  const fakeRegions = [
    {
      key: 'us',
      value: 'unitedstates',
      text: 'United States'
    },
    {
      key: 'uk',
      value: 'unitedkingdom',
      text: 'United Kingdom'
    },
    {
      key: 'fr',
      value: 'france',
      text: 'France'
    }
  ];

  return (
    <>
      <Header as='h2'>Data Request Form</Header>
      <Form onSubmit={submitRequest}>
        <Form.Group>
          <Form.Select label="Select Country" placeholder="Select a country" options={fakeRegions} onChange={handleRegionChange} value={regionState} />
        </Form.Group>
        <Form.Group>
          <Form.Input label="Starting Date" placeholder="Starting Date" value={startDate} type="date" onChange={(e) => setStartDate(e.target.value)} />
          <Form.Input label="Ending Date" placeholder="Ending Date" value={endDate} type="date" onChange={(e) => setEndDate(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Field inline>
            <label>Data Source</label>
            <Form.Checkbox label="Reddit" checked={reddit} onChange={() => setReddit(!reddit)} />
            <Form.Checkbox label="Twitter" checked={twitter} onChange={() => setTwitter(!twitter)} />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Button content="Submit" />
          <Form.Button content="New Search" type="button" onClick={handleResetForm} />
        </Form.Group>
      </Form>
    </>
  );
};

RequestForm.propTypes = {
  updateParentRedditData: PropTypes.func.isRequired,
};

export default RequestForm;