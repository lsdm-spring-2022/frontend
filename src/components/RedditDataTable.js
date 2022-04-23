import React from 'react';
import PropTypes from 'prop-types';
import { Header, Table } from 'semantic-ui-react';

const RedditDataTable = ({ redditData }) => {
  const renderTable = (data) => {
    return (
      <>
        <Header as='h2'>Reddit Data</Header>
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
            {data.map(
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
  };

  return (
    <>
      {redditData.length > 0 ? renderTable(redditData) : null}
    </>
  );
};

RedditDataTable.propTypes = {
  redditData: PropTypes.array.isRequired,
};

export default RedditDataTable;