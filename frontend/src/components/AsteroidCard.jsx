import React from 'react';
import { Ruler, Gauge, Navigation } from 'lucide-react';

const AsteroidCard = ({ asteroid }) => {
  const name = asteroid.name.replace(/[()]/g, '');
  const diameterMin = asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2);
  const diameterMax = asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);
  const velocity = Math.round(parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour)).toLocaleString();
  const missDistance = Math.round(parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)).toLocaleString();
  const isHazardous = asteroid.is_potentially_hazardous_asteroid;

  return (
    <div className="asteroid-card glass fade-in">
      <h3>{name}</h3>
      
      <div className="card-stat">
        <span className="stat-label"><Ruler size={14} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Est. Diameter</span>
        <span className="stat-value">{diameterMin} - {diameterMax} km</span>
      </div>

      <div className="card-stat">
        <span className="stat-label"><Gauge size={14} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Velocity</span>
        <span className="stat-value">{velocity} km/h</span>
      </div>

      <div className="card-stat">
        <span className="stat-label"><Navigation size={14} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Miss Distance</span>
        <span className="stat-value">{missDistance} km</span>
      </div>

      <div className={`hazard-badge hazard-${isHazardous}`}>
        {isHazardous ? '⚠️ Potential Hazard' : '✅ Safe Trajectory'}
      </div>
    </div>
  );
};

export default AsteroidCard;
