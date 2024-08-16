import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Mock login logic
    if (email && password && role) {
      localStorage.setItem('role', role);
      if (role === 'patient') {
        history.push('/patient-dashboard');
      } else if (role === 'doctor') {
        history.push('/doctor-dashboard');
      } else if (role === 'scheduler') {
        history.push('/scheduler-dashboard');
      }
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email/Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="scheduler">Scheduler</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
