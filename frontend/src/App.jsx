import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rocket, ShieldAlert, Target, Activity } from 'lucide-react';
import StatsOverview from './components/StatsOverview';
import Dashboard from './components/Dashboard';

const API_BASE = '/api';

function App() {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetching today's data as default
      const response = await axios.get(`${API_BASE}/feed`);
      
      // The NASA API returns an object with dates as keys. We flatten it.
      const dates = response.data.near_earth_objects;
      const flattened = Object.values(dates).flat();
      
      setAsteroids(flattened);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Houston, we have a problem connecting to the asteroid data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="glass fade-in">
        <div className="logo">
          <h1>NEO<span style={{color: 'var(--accent-secondary)'}}>GUARD</span></h1>
        </div>
        <div className="status-badge" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <Activity size={18} color="var(--success)" />
          <span style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Live NASA Feed</span>
        </div>
      </header>

      {loading ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
          <span className="loader"></span>
        </div>
      ) : error ? (
        <div className="glass" style={{padding: '3rem', textAlign: 'center', color: 'var(--danger)'}}>
          <ShieldAlert size={48} style={{marginBottom: '1rem'}} />
          <h2>{error}</h2>
        </div>
      ) : (
        <>
          <StatsOverview asteroids={asteroids} />
          <Dashboard asteroids={asteroids} />
        </>
      )}

      <footer style={{marginTop: '5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', paddingBottom: '2rem'}}>
        Powered by NASA Open APIs & Express.js
      </footer>
    </div>
  );
}

export default App;
