import React, { useEffect, useState } from 'react';
import { GuestbookEntry } from './GuestbookEntry';
import axios from 'axios';
import { DEV_BASE_URL } from '../api_urls';
import { PROD_BASE_URL } from '../api_urls';

export const GuestbookEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(PROD_BASE_URL + 'getall');
      document.getElementById('waiting').style.display = 'none';
      setEntries(response.data.listOfEntries);
    }
    setInterval(() => {
      getData();
    }, 2000);
  }, []);

  return (
    <>
      <h1>Guest Book Entries:</h1>
      <h2 id='waiting'>waiting for data...</h2>
      <div className='entries'>
        {entries.map((entry) => (
          <GuestbookEntry key={entry.id} {...entry} />
        ))}
      </div>
    </>
  );
};
