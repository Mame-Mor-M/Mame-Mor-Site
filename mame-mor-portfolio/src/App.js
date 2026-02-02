import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './GamePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Home />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
