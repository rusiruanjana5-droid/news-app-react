import React from 'react';

function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#f8fafc', textAlign: 'center' }}>
      <h1 style={{ color: '#2dd4bf' }}>About NewsRAK</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
        Welcome to NewsRAK, your number one source for all things news. 
        We're dedicated to giving you the very best of news updates, 
        with a focus on dependability, customer service, and uniqueness.
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '10px' }}>
        <h3 style={{ color: '#2dd4bf' }}>Developed by: Rusiru</h3>
        <p>React Assignment - Session 4</p>
      </div>
    </div>
  );
}

export default About;