import React, { useEffect, useState } from 'react';
import { GuestbookEntry } from './GuestbookEntry';
import axios from 'axios';
import { DEV_BASE_URL } from '../api_urls';
import { PROD_BASE_URL } from '../api_urls';

export const GuestbookEntries = () => {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await axios.get(PROD_BASE_URL + "getall");
      setEntries(request.data.listOfEntries);
    }
    setInterval(() => {
      getData();
    }, 2000);
  }, []);
  
  return (
    <>
      <h1>Guest Book Entries:</h1>
      <div className="entries">
        {entries.map((entry) => (
            <GuestbookEntry key={entry.id} name={entry.name} content={entry.content}/>
          ))}
      </div>
    </>
  )
}
