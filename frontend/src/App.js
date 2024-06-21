import React from 'react';
import axios from 'axios';

class App extends React.Component {
  viewModel = async () => {
    try {
      const response = await axios.get('/api/view_model');
      window.open(response.data.url, '_blank');
    } catch (error) {
      console.error('Error viewing model:', error);
    }
  };

  retrainModel = async (event) => {
    event.preventDefault();
    const learningRate = event.target.learning_rate.value;
    const batchSize = event.target.batch_size.value;

    try {
      const response = await axios.post('/api/retrain', {
        learning_rate: learningRate,
        batch_size: batchSize,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error retraining model:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>Model Viewer</h1>
        <button onClick={this.viewModel}>View Model</button>

        <h2>Retrain Model</h2>
        <form onSubmit={this.retrainModel}>
          <label>
            Learning Rate:
            <input type="text" name="learning_rate" />
          </label>
          <br />
          <label>
            Batch Size:
            <input type="text" name="batch_size" />
          </label>
          <br />
          <button type="submit">Retrain</button>
        </form>
      </div>
    );
  }
}

export default App;
