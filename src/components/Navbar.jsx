import React from "react"
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 

function Navbar() {
  
  const { theme, toggleTheme } = useTheme(); 

  return (
    <nav style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      padding: '1rem 10%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid var(--border)'
    }}>
      <h1 style={{ margin: 0, color: 'var(--accent)' }}>NewsRAK</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>About</Link>
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          style={{ 
            background: 'none', 
            border: '1px solid var(--accent)', 
            color: 'var(--accent)', 
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '1.2rem'
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;