import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

import { Heading } from '../components/Heading';
import { RegionsTable } from '../components/RegionsTable';

export const Home = () => {
  return (
    <>
      <Heading />
      <Segment vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Why?
              </Header>
              <p>
                Currently, there are several social media applications. The only
                way to view what is trending on each application is to download
                each one individually and create an account for each
                application. Our application will consolidate all of his data
                into one application. Users will no longer need to navigate
                multiple sources in order to view trending topics.
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Data?
              </Header>
              <p>
                Our team collected historical data from Reddit and Twitter.
                Reddit data was collected from January 1, 2012 to December 31,
                2021. Reddit data was collected for each day starting at 00:00
                and ending at 23:59. Twitter data was collected from March 29,
                2022 to May 1, 2022. Twitter data was collected each day.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Regions
              </Header>
              <p>
                The table below contains the regions from which data was
                collected and the date ranges of data collected from each social
                media site.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <RegionsTable />
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};
