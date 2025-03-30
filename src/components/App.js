import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import CoursesPage from './components/coursePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<h1>Login Page Coming Soon</h1>} />
        <Route path="/attempt-quiz" element={<h1>Quiz Page Coming Soon</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
