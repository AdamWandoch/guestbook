import React, { useEffect, useState } from 'react';
import { GuestbookEntry } from './GuestbookEntry';
import axios from 'axios';

export const GuestbookEntries = () => {
  
  // API URLs
  const DEV_BASE_URL = "http://localhost:5000/guestbook/v1/";
  const PROD_BASE_URL = "https://adam-studies-apis.herokuapp.com/guestbook/v1/";
  
  const [entries, setEnries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(PROD_BASE_URL + "getall");
      setEnries(request.data.listOfEntries);
    }
    setInterval(() => {
      fetchData();
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
