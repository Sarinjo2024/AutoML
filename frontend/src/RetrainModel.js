import React, { useState } from 'react';
import axios from 'axios';

function RetrainModel() {
  const [modelPath, setModelPath] = useState('');
  const [learningRate, setLearningRate] = useState('');
  const [epochs, setEpochs] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/retrain', {
        model_path: modelPath,
        learning_rate: learningRate,
        epochs: epochs,
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error retraining the model:', error);
    }
  };

  return (
    <div>
      <h2>Retrain Model</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Model Path:</label>
          <input type="text" value={modelPath} onChange={(e) => setModelPath(e.target.value)} />
        </div>
        <div>
          <label>Learning Rate:</label>
          <input type="text" value={learningRate} onChange={(e) => setLearningRate(e.target.value)} />
        </div>
        <div>
          <label>Epochs:</label>
          <input type="text" value={epochs} onChange={(e) => setEpochs(e.target.value)} />
        </div>
        <button type="submit">Retrain</button>
      </form>
      {response && <div>{response.status}</div>}
    </div>
  );
}

export default RetrainModel;
