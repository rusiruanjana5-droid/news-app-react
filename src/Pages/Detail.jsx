import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div className="spinner"></div>;

  return (
    <div style={{ padding: '3rem 5%', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)' }}>
      <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>← Back</Link>
      <h1 style={{ color: 'var(--accent)', marginTop: '1rem' }}>{post.title}</h1>
      <img src={`https://picsum.photos/seed/${id}/800/400`} style={{ width: '100%', borderRadius: '15px', margin: '1rem 0' }} />
      <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{post.body} {post.body}</p>
    </div>
  );
};

export default Detail;