'use client'

import React, { useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Component Playground</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

const DevEnvironment = () => {
  return (
    <div>
      <h1>Component Development</h1>
      <TestComponent />
    </div>
  );
};

export default DevEnvironment;
