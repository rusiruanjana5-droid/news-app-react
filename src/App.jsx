import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import About from './Pages/About';
import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', transition: '0.3s' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;