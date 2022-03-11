import React, { useState, useEffect } from 'react';

import { getData } from '../apis/data';

const Data = () => {
  const [currentData, setCurrentData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setCurrentData(`API says: ${response.message}`);
      } catch (err) {
        setCurrentData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from API</h2>
      {currentData}
    </div>
  );
};

export default Data;
