import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to AutoML</h1>
      <p>Choose an option:</p>
      <Link to="/select-model">
        <button>Select Existing Model</button>
      </Link>
      <Link to="/import-model">
        <button>Import Your Own Model</button>
      </Link>
    </div>
  );
}

export default Home;
