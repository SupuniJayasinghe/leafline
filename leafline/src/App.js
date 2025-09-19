import './App.css';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
