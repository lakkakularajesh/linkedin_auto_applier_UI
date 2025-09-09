import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppliedJobsList from './components/AppliedJobsList';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppliedJobsList />} />
            </Routes>
        </Router>
    );
};

export default App;