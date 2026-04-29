import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Empowering the Roots of Our Nation</h1>
        <p>Your one-stop digital platform for modern agriculture. Connect with markets, detect diseases, and access government support effortlessly.</p>
        <Link to="/marketplace">
          <button style={{ background: 'var(--secondary)', color: 'var(--primary-dark)', fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Get Started Now
          </button>
        </Link>
      </section>

      <div className="container">
        <h2 style={{ marginBottom: '3rem' }}>Our Core Services</h2>
        <div className="grid">
          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛒</div>
            <h3>Digital Marketplace</h3>
            <p>Direct farm-to-consumer access. Sell your products at the best prices without middlemen.</p>
            <Link to="/marketplace" style={{ marginTop: 'auto', fontWeight: 'bold' }}>Explore Market →</Link>
          </div>
          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
            <h3>Market Analytics</h3>
            <p>Stay updated with real-time commodity prices and trends across national markets.</p>
            <Link to="/prices" style={{ marginTop: 'auto', fontWeight: 'bold' }}>Check Prices →</Link>
          </div>
          <div className="card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
            <h3>Disease Detection</h3>
            <p>Identify crop diseases early with our expert symptoms guide and treatment solutions.</p>
            <Link to="/diseases" style={{ marginTop: 'auto', fontWeight: 'bold' }}>Learn More →</Link>
          </div>
        </div>

        <section style={{ marginTop: '6rem', background: 'white', padding: '4rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ textAlign: 'left' }}>Why Choose KrishiConnect?</h2>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <div><strong>Trust & Transparency:</strong> Verified farmers and secure transactions.</div>
                </li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <div><strong>Expert Knowledge:</strong> Access to curated tutorials from agriculture specialists.</div>
                </li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <div><strong>Government Integration:</strong> Easy access to the latest subsidies and schemes.</div>
                </li>
              </ul>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
               <div style={{ fontSize: '10rem' }}>🚜</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
