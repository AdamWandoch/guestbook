import React from 'react';

export const GuestbookEntry = (props) => {
  return (
    <div className='entry'>
      <p>Name: {props.name}</p>
      <p>Content: {props.content}</p>
    </div>
  );
};
