import sampleRedditData from './sample-data.json';

export const getSampleData = () => {
  try {
    return JSON.parse(JSON.stringify(sampleRedditData));
  } catch (err) {
    console.error(err);
    return [];
  }
};
