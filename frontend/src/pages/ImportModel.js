import React from 'react';
import axios from 'axios';

class ImportModel extends React.Component {
  state = {
    file: null,
    message: ''
  };

  handleFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('modelFile', this.state.file);

    try {
      const response = await axios.post('/api/import_model', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      this.setState({ message: response.data.message });
    } catch (error) {
      console.error('Error importing model:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>Import Your Own Model</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFileChange} />
          <button type="submit">Import</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default ImportModel;
