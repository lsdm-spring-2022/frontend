import axios from 'axios';

export const getSocialMediaData = async (
  region,
  startDate,
  endDate,
  reddit,
  twitter,
  limit
) => {
  const params = {
    region,
    startDate,
    endDate,
    reddit,
    twitter,
    limit,
  };
  try {
    const response = await axios({
      method: 'GET',
      url: 'api/data',
      params,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Error fetching data');
  }
};
