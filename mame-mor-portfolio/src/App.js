import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './GamePage';
import Blog from './BlogPage';

function App() {
    return (
        <Router >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
