import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Header } from 'semantic-ui-react';

import { getSocialMediaData } from '../apis/data';
import countries from '../countries-data';

const limitOptions = [
  { key: '10', value: '10', text: '10' },
  { key: '25', value: '25', text: '25' },
  { key: '50', value: '50', text: '50' },
  { key: '100', value: '100', text: '100' },
  { key: '250', value: '250', text: '250' },
  { key: '500', value: '500', text: '500' },
  { key: '1000', value: '1000', text: '1000' },
];

export const RequestForm = ({
  updateRedditData,
  updateTwitterData,
  updateLoadStatus,
  updateErrorStatus,
}) => {
  const [regionState, setRegionState] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [limit, setLimit] = useState('50');

  const handleRegionChange = (e, data) => {
    setRegionState(data.value);
  };

  const handleLimitChange = (e, data) => {
    setLimit(data.value);
  };

  const handleResetForm = () => {
    setRegionState('');
    setStartDate('');
    setEndDate('');
    setReddit(false);
    setTwitter(false);
    updateRedditData([]);
    updateTwitterData([]);
    updateLoadStatus(false);
    updateErrorStatus(false);
    setLimit('50');
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    if (regionState === '') console.log('You must select a region.');
    else if (startDate > endDate) console.log('Invalid date range.');
    else if (!reddit && !twitter)
      console.log('You need to pick at least one site!');
    else {
      updateLoadStatus(true);
      try {
        const apiData = await getSocialMediaData(
          regionState,
          startDate,
          endDate,
          reddit,
          twitter,
          limit
        );
        updateRedditData(apiData.reddit);
        updateTwitterData(apiData.twitter);
      } catch (err) {
        console.error(err);
        updateErrorStatus(true);
      } finally {
        updateLoadStatus(false);
      }
    }
  };

  return (
    <>
      <Header as="h2">Data Request Form</Header>
      <Form onSubmit={submitRequest}>
        <Form.Group>
          <Form.Select
            label="Select Country"
            placeholder="Select a country"
            options={countries}
            onChange={handleRegionChange}
            value={regionState}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Starting Date"
            placeholder="Starting Date"
            value={startDate}
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Form.Input
            label="Ending Date"
            placeholder="Ending Date"
            value={endDate}
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field inline>
            <label>Data Source(s)</label>
            <Form.Checkbox
              label="Include Reddit Data"
              checked={reddit}
              onChange={() => setReddit(!reddit)}
            />
            <Form.Checkbox
              label="Include Twitter Data"
              checked={twitter}
              onChange={() => setTwitter(!twitter)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field inline>
            <Form.Select
              label="Number of Results"
              placeholder="Results Limit"
              options={limitOptions}
              onChange={handleLimitChange}
              value={limit}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Button content="Submit" />
          <Form.Button
            content="New Search"
            type="button"
            onClick={handleResetForm}
          />
        </Form.Group>
      </Form>
    </>
  );
};

RequestForm.propTypes = {
  updateRedditData: PropTypes.func.isRequired,
  updateTwitterData: PropTypes.func.isRequired,
  updateLoadStatus: PropTypes.func.isRequired,
  updateErrorStatus: PropTypes.func.isRequired,
};
