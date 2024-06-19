import React from 'react';
import './App.css';
import RetrainModel from './RetrainModel';  // Import RetrainModel component from RetrainModel.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Neural Network Retrainer</h1>
      </header>
      <RetrainModel />  // Render RetrainModel component here
    </div>
  );
}

export default App;
