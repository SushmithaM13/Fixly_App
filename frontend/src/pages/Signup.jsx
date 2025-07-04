import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from  '../api/axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isProvider: false,
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/signup', formData);
      alert('Signup successful. Please login.');
      navigate('/');
    } catch (err) {
      console.error(err.response?.data || err.message); 
      alert('Signup failed. Try again.',err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <label>
        <input type="checkbox" name="isProvider" onChange={handleChange} />
        Register as Service Provider
      </label>
      <button type="submit">Signup</button>
      <p>Already have an account? <a href="/">Login</a></p>
    </form>
  );
}
