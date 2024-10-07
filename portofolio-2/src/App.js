import React from 'react';
import './App.css';
import SiteCard from './components/SiteCard';
import sites from './components/Data';

function App() {
  return (
    <div>
      {sites.map((site, index) => (
        <SiteCard
          key={index}
          title={site.title}
          description={site.description}
          image={site.image}
          demoLink={site.demoLink}
          githubLink={site.githubLink}
        />
      ))}
    </div>
  );
}

export default App;
