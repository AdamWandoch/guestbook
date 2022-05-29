import React from 'react';

export const GuestbookEntry = (props) => {
  return (
    <div className='entry'>
      <p>
        <span className='author'>{props.name}</span> wrote:
      </p>
      <p className='content'>{props.content}</p>
    </div>
  );
};
