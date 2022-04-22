import React, { useState } from 'react';
import { Form, Table } from 'semantic-ui-react';

import { getSampleData } from '../sample-data/get-sample-data';

const Data = () => {
  const [regionState, setRegionState] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reddit, setReddit] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [redditData, setRedditData] = useState([]);

  const handleRegionChange = (e, data) => {
    setRegionState(data.value);
  };

  const handleResetForm = () => {
    setRegionState('');
    setStartDate('');
    setEndDate('');
    setReddit(false);
    setTwitter(false);
    setRedditData([]);
  };

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
      //await getSocialMediaData(regionState, startDate, endDate, reddit, twitter);
      getFakeRedditData();
    }
  }

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

  const renderForm = () => (
    <>
      <h2>Submit Data Request</h2>
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

  const renderData = () => {
    if (redditData.length > 0) {
      return (
        <>
          <h2>Reddit Data</h2>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Region</Table.HeaderCell>
                <Table.HeaderCell>Subreddit</Table.HeaderCell>
                <Table.HeaderCell>Post Title</Table.HeaderCell>
                <Table.HeaderCell>Upvotes</Table.HeaderCell>
                <Table.HeaderCell>Date Stored</Table.HeaderCell>
                <Table.HeaderCell>Comments</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
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
                  <Table.Row key={datePosted}>
                    <Table.Cell>{region}</Table.Cell>
                    <Table.Cell>{subreddit}</Table.Cell>
                    <Table.Cell>{postTitle}</Table.Cell>
                    <Table.Cell>{upvotes}</Table.Cell>
                    <Table.Cell>{dateStored}</Table.Cell>
                    <Table.Cell>{comments}</Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table>
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
