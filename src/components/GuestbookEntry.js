import React from 'react';

export const GuestbookEntry = ({ name, content }) => {
  return (
    <div className='entry'>
      <p>
        <span className='author'>{name}</span> wrote:
      </p>
      <p className='content'>{content}</p>
    </div>
  );
};
