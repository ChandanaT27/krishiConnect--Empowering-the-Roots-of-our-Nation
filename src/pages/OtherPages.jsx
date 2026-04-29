import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Prices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/prices').then(res => setPrices(res.data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: 'var(--primary-dark)' }}>Live Market Prices</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Track the latest rates for essential agricultural commodities.</p>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Unit</th>
              <th>Current Price</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {prices.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 'bold' }}>{p.commodity}</td>
                <td>{p.unit}</td>
                <td style={{ fontWeight: 'bold' }}>₹{p.price}</td>
                <td>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold',
                    background: p.trend === 'Up' ? '#ffebee' : p.trend === 'Down' ? '#e8f5e9' : '#f5f5f5',
                    color: p.trend === 'Up' ? '#c62828' : p.trend === 'Down' ? '#2e7d32' : '#616161'
                  }}>
                    {p.trend === 'Up' ? '▲ Up' : p.trend === 'Down' ? '▼ Down' : '● Stable'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Subsidies = () => {
  const [subsidies, setSubsidies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/subsidies').then(res => setSubsidies(res.data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Government Schemes</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Direct financial support and resources for the farming community.</p>
      
      <div className="grid">
        {subsidies.map(s => (
          <div key={s.id} className="card" style={{ borderLeft: '5px solid var(--primary)' }}>
            <h3 style={{ marginTop: 0 }}>{s.title}</h3>
            <p style={{ flex: 1 }}>{s.description}</p>
            <div style={{ margin: '1rem 0', padding: '1rem', background: '#f8f9fa', borderRadius: '8px', fontSize: '0.9rem' }}>
              <strong>📍 Eligibility:</strong> {s.eligibility}
            </div>
            <a href={s.applyLink} target="_blank" rel="noopener noreferrer">
              <button style={{ width: '100%' }}>Apply Now External →</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Diseases = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/diseases').then(res => setDiseases(res.data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Crop Health Guide</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Identify and treat common crop diseases to protect your yield.</p>
      
      <div className="grid">
        {diseases.map(d => (
          <div key={d.id} className="card">
            <span style={{ fontSize: '0.7rem', background: '#e3f2fd', color: '#1565c0', padding: '0.2rem 0.6rem', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '0.5rem' }}>{d.cropName}</span>
            <h3 style={{ margin: '0.2rem 0 1rem' }}>{d.diseaseName}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <strong>⚠️ Symptoms:</strong>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{d.symptoms}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>🔬 Cause:</strong>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{d.causes}</p>
            </div>
            <div style={{ padding: '1rem', background: '#fff9c4', borderRadius: '8px', marginTop: 'auto' }}>
              <strong>💊 Treatment:</strong>
              <p style={{ fontSize: '0.9rem', margin: '0.3rem 0 0' }}>{d.treatment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/tutorials').then(res => setTutorials(res.data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Knowledge Center</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Expert-led video guides to improve your farming practices.</p>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
        {tutorials.map(t => (
          <div key={t.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <iframe
              className="video-card"
              src={`https://www.youtube.com/embed/${t.videoId}`}
              title={t.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: 0 }}>{t.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8081/api/auth/login', credentials);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Welcome Back</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="e.g. farmer@krishi.com" value={credentials.email} onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
          </div>
          <button type="submit" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>Login to Account</button>
        </form>
        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <p>Demo Accounts:</p>
          <p>Admin: admin@krishi.com / admin123</p>
          <p>Farmer: farmer@krishi.com / farmer123</p>
          <p>User: user@krishi.com / user123</p>
        </div>
      </div>
    </div>
  );
};
