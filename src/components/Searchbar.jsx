import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      <input 
        type="text" 
        placeholder="Search news by title..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          width: '100%', maxWidth: '500px', padding: '12px 20px', 
          borderRadius: '30px', border: '2px solid var(--accent)', 
          backgroundColor: 'var(--bg-secondary)', color: 'var(--text-main)',
          outline: 'none'
        }}
      />
    </div>
  );
};

export default SearchBar;