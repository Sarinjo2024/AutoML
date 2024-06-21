import React from 'react';
import axios from 'axios';

class SelectModel extends React.Component {
  viewModel = async () => {
    try {
      const response = await axios.get('/api/view_model'); // Adjust API endpoint as per your backend
      window.open(response.data.url, '_blank');
    } catch (error) {
      console.error('Error viewing model:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>Select Existing Model</h1>
        <p>Choose an action:</p>
        <button onClick={this.viewModel}>View Model</button>
      </div>
    );
  }
}

export default SelectModel;
