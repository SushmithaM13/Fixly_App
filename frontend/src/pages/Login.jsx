import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { useAuth } from '../context/AuthContext';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting to:", axios.defaults.baseURL + '/auth/login'); // ⬅️ ADD THIS
  console.log("Axios baseURL = ", axios.defaults.baseURL);

  try {
    // const res = await axios.post('/auth/login', { email, password });
    const res = await axios.post('http://localhost:4000/api/auth/login', {
  email,
  password
});
console.log("Axios baseURL = ", axios.defaults.baseURL);

    login(res.data.token, res.data.user);
    navigate('/dashboard');
  } catch (err) {
    console.error("Login failed:", err); // ⬅️ Show detailed error
    alert('Login failed. See console for details.');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </form>
  );
}
