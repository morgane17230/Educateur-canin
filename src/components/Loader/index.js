import React from 'react';

import 'src/styles/loader.scss';

const Loader = () => {
  console.log('loader');
  return (
    <>
      <div className="paw-print">
        <div className="pad large" />
        <div className="pad small-1" />
        <div className="pad small-2" />
        <div className="pad small-3" />
        <div className="pad small-4" />
      </div>
    </>
  );
};

export default Loader;
