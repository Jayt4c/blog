import React from 'react';

const Author = ({ authors }) => {
  return (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-8">
    <img
        alt={authors.name}
        height="100px"
        width="100px"
        className="align-middle   rounded-full"
        src="https://media.graphcms.com/qr7lY79iSymb9az4TIrS"
      />   
    </div>
    <h3 className="text-white mt-1 mb-1 text-xl font-bold">JWebDev</h3>
    <p className="text-white text-ls">I hope you found this information useful.</p>
  </div>
)};

export default Author;
