import axios from 'axios';

export const getData = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:3000/api/data',
  };
  const response = await axios(config);
  console.log(`Response: ${JSON.stringify(response.data)}`);
  return response.data;
};
