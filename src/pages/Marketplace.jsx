import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', description: '', farmerName: '' });
  const [message, setMessage] = useState('');
  
  const user = JSON.parse(localStorage.getItem('user'));
  const canAddProduct = user && (user.role === 'ADMIN' || user.role === 'FARMER');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:8081/api/products');
    setProducts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/products', newProduct);
      setMessage('Product added successfully!');
      setNewProduct({ name: '', category: '', price: '', description: '', farmerName: '' });
      setShowForm(false);
      fetchProducts();
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Error adding product.');
    }
  };

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ margin: 0, color: 'var(--primary-dark)' }}>Marketplace</h1>
          <p style={{ color: 'var(--text-muted)' }}>Quality produce directly from local farms.</p>
        </div>
        {canAddProduct && (
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ List New Product'}
          </button>
        )}
      </header>

      {message && <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '8px', marginBottom: '1rem' }}>{message}</div>}

      {showForm && (
        <div className="auth-container" style={{ margin: '0 auto 3rem', maxWidth: '600px' }}>
          <h2 style={{ marginTop: 0 }}>Add Your Produce</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" placeholder="e.g. Fresh Red Onions" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Category</label>
                <select value={newProduct.category} onChange={(e) => setNewProduct({...newProduct, category: e.target.value})} required>
                  <option value="">Select Category</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Grains">Grains</option>
                  <option value="Dairy & More">Dairy & More</option>
                  <option value="Nuts">Nuts</option>
                </select>
              </div>
              <div className="form-group">
                <label>Price ($)</label>
                <input type="number" step="0.01" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} required />
              </div>
            </div>
            <div className="form-group">
              <label>Farmer Name</label>
              <input type="text" value={newProduct.farmerName} onChange={(e) => setNewProduct({...newProduct, farmerName: e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea rows="3" value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} required />
            </div>
            <button type="submit" style={{ width: '100%' }}>Post to Marketplace</button>
          </form>
        </div>
      )}

      <div className="grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <div style={{ background: '#f8f9fa', height: '150px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: '1rem' }}>
               {p.category === 'Vegetables' ? '🥦' : p.category === 'Fruits' ? '🍎' : p.category === 'Grains' ? '🌾' : '🥛'}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase' }}>{p.category}</span>
            <h3 style={{ margin: '0.5rem 0' }}>{p.name}</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary-dark)', margin: '0.5rem 0' }}>${p.price.toFixed(2)}</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', flex: 1 }}>{p.description}</p>
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #eee', fontSize: '0.85rem' }}>
              👨‍🌾 <strong>Farmer:</strong> {p.farmerName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
