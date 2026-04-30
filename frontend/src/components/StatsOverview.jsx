import React from 'react';
import { Target, Zap, ShieldAlert } from 'lucide-react';

const StatsOverview = ({ asteroids }) => {
  const total = asteroids.length;
  const hazardousCount = asteroids.filter(a => a.is_potentially_hazardous_asteroid).length;
  
  // Find closest approach
  const closest = asteroids.reduce((min, current) => {
    const currentDist = parseFloat(current.close_approach_data[0]?.miss_distance.kilometers || Infinity);
    const minDist = parseFloat(min.close_approach_data[0]?.miss_distance.kilometers || Infinity);
    return currentDist < minDist ? current : min;
  }, asteroids[0]);

  const closestDist = closest?.close_approach_data[0]?.miss_distance.kilometers 
    ? Math.round(parseFloat(closest.close_approach_data[0].miss_distance.kilometers)).toLocaleString() 
    : 'N/A';

  return (
    <div className="stats-row fade-in">
      <div className="stat-box glass">
        <Target size={20} color="var(--accent-primary)" style={{marginBottom: '0.5rem'}} />
        <h4>Total Objects</h4>
        <div className="number">{total}</div>
      </div>
      
      <div className="stat-box glass">
        <ShieldAlert size={20} color="var(--danger)" style={{marginBottom: '0.5rem'}} />
        <h4>Potentially Hazardous</h4>
        <div className="number" style={{color: 'var(--danger)'}}>{hazardousCount}</div>
      </div>

      <div className="stat-box glass">
        <Zap size={20} color="var(--accent-secondary)" style={{marginBottom: '0.5rem'}} />
        <h4>Closest Approach</h4>
        <div className="number" style={{fontSize: '1.5rem', marginTop: '0.5rem'}}>{closestDist} <span style={{fontSize: '0.8rem'}}>km</span></div>
      </div>
    </div>
  );
};

export default StatsOverview;
