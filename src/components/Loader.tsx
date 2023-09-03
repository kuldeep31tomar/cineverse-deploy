'use client';

import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center w-full min-h-screen">
      <div
        style={{ width: '60px', height: `60px` }}
        className="m-auto animate-spin"
      >
        <div
          className="h-full w-full border-4 border-t-background border-primary
        rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};

export default Loader;