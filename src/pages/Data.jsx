import React, { useState } from 'react';
import { Container, Header, Loader } from 'semantic-ui-react';

import { RequestForm } from '../components/RequestForm';
import { RedditDataTable } from '../components/RedditDataTable';
import { TwitterDataTable } from '../components/TwitterDataTable';
import { ErrorMessage } from '../components/ErrorMessage';

export const Data = () => {
  const [redditData, setRedditData] = useState([]);
  const [twitterData, setTwitterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputErrors, setInputErrors] = useState([]);

  const updateRedditData = (data) => {
    setRedditData(data);
  };

  const updateTwitterData = (data) => {
    setTwitterData(data);
  };

  const updateLoadStatus = (status) => {
    setIsLoading(status);
  };

  const updateErrorStatus = (status) => {
    setIsError(status);
  };

  const updateInputErrors = (error) => {
    setInputErrors(error);
  };

  const renderTables = () => {
    return (
      <>
        <RedditDataTable redditData={redditData} />
        <br />
        <TwitterDataTable twitterData={twitterData} />
        <br />
      </>
    );
  };

  return (
    <Container>
      <RequestForm
        updateRedditData={updateRedditData}
        updateTwitterData={updateTwitterData}
        updateLoadStatus={updateLoadStatus}
        updateErrorStatus={updateErrorStatus}
        updateInputErrors={updateInputErrors}
      />
      <Header as="h5">
        Note: The data retrieved from Reddit and Twitter may contain
        inappropriate content.
      </Header>
      {isLoading && !isError ? (
        <Header as="h1">
          Loading...
          <Loader active inline />
        </Header>
      ) : (
        renderTables()
      )}
      {inputErrors.length > 0 && <ErrorMessage errors={inputErrors} />}
      {isError && <Header as="h1">Error Fetching Data!</Header>}
    </Container>
  );
};
