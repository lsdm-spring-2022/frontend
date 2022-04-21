import axios from 'axios';

const BASE_URL = 'http://localhost/';

export const getSocialMediaData = async (
  region,
  startDate,
  endDate,
  reddit,
  twitter
) => {
  const params = {
    region,
    startDate,
    endDate,
    reddit,
    twitter,
  };
  try {
    const response = await axios.get(`${BASE_URL}api/data`, { params });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
