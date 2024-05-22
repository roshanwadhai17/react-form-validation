import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import SubmissionDetails from './SubmissionDetails';
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<SubmissionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
