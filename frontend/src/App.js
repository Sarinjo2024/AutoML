import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectModel from './pages/SelectModel';
import RetrainModel from './pages/RetrainModel';
import ImportModel from './pages/ImportModel';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-model" element={<SelectModel />} />
            <Route path="/retrain-model" element={<RetrainModel />} />
            <Route path="/import-model" element={<ImportModel />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
