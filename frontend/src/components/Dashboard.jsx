import React from 'react';
import AsteroidCard from './AsteroidCard';

const Dashboard = ({ asteroids }) => {
  return (
    <div className="dashboard-section fade-in">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: '600'}}>Near Earth Objects</h2>
        <span style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{asteroids.length} detected</span>
      </div>
      
      <div className="dashboard-grid">
        {asteroids.map((asteroid) => (
          <AsteroidCard key={asteroid.id} asteroid={asteroid} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
