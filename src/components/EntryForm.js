import axios from 'axios';
import React, { useState } from 'react';
import { DEV_BASE_URL } from '../api_urls';
import { PROD_BASE_URL } from '../api_urls';

export const EntryForm = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, content };
    const postData = async () => {
      const response = await axios.post(PROD_BASE_URL + 'save', formData);
      console.log(response);
    };
    postData();
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>Name: </label>
      <input
        type='text'
        placeholder='enter your name here'
        name='name'
        id='name'
        required
        maxLength={20}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Content: </label>
      <textarea
        placeholder='guestbook entry here'
        name='content'
        id='content'
        required
        maxLength={255}
        rows='5'
        cols='30'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>SUBMIT</button>
    </form>
  );
};
