import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setNews(data.slice(0, 12));
        setLoading(false);
      });
  }, []);

  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="spinner"></div>;

  return (
    <div style={{ padding: '2rem 5%' }}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {filteredNews.map((item, index) => (
          <ArticleCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;