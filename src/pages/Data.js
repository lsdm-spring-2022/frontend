import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import RedditDataTable from '../components/RedditDataTable';

import RequestForm from '../components/RequestForm';

const Data = () => {
  const [redditData, setRedditData] = useState([]);

  const updateRedditData = (data) => {
    setRedditData(data);
  };

  return (
    <Container text>
      <RequestForm updateParentRedditData={updateRedditData}/>
      <RedditDataTable redditData={redditData} />
    </Container>
  );
};

export default Data;
