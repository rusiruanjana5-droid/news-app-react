import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArticleCard = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      style={{ 
        backgroundColor: 'var(--bg-secondary)', borderRadius: '15px', 
        overflow: 'hidden', border: '1px solid var(--border)', 
        display: 'flex', flexDirection: 'column'
      }}
    >
      <img src={`https://picsum.photos/seed/${item.id}/400/220`} alt="news" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem', flexGrow: 1 }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{item.title.substring(0, 40)}...</h3>
        <p style={{ color: 'var(--text-sub)', marginBottom: '1.5rem' }}>{item.body.substring(0, 100)}...</p>
        
        {/* මෙන්න මෙතන තමයි හැදුවේ */}
        <Link 
          to={`/detail/${item.id}`} 
          style={{ 
            backgroundColor: 'var(--accent)', 
            color: 'white', 
            padding: '0.6rem 1.2rem', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;