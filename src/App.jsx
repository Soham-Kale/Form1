import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventRegistrationForm from './components/EventRegistrationForm';
import SummaryPage from './components/SummaryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EventRegistrationForm />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
