import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'; 

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedInUser(user);
      setEmail(user.email);
      setName(user.name);
    }
  }, []);

 
  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/.test(password);


  const handleSignup = () => {
    if (!isValidName(name)) {
      alert('Name should contain only alphabets and spaces.');
      return;
    }
    if (!isValidPassword(password)) {
      alert('Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.');
      return;
    }



    const newUser = { name, email, password, phone, dob };
    const users = JSON.parse(localStorage.getItem('users')) || [];

   
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert('User with this email already exists.');
      return;
    }


    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(newUser));
    setLoggedInUser(newUser);
    alert('Signup successful!');
    navigate('/enroll');
  };


  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      setLoggedInUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      alert('Login successful!');
      navigate('/enroll');
    } else {
      alert('Invalid credentials');
    }
  };

 
  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
    setDob('');
  };

  return (
    <div className="login-signup-container">
      {loggedInUser ? (
        <div className="card-container">
          <div className="welcome-card">
            <h2>Welcome, {loggedInUser.name}!</h2>
            <p>Glad to have you here. Ready to explore?</p>
            <div className="card-buttons">
              <button className="card-btn" onClick={() => navigate('/Enroll')}>Enroll Now</button>
              <button className="card-btn logout" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
        
              
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button className="submit-button" onClick={isLogin ? handleLogin : handleSignup}>
            {isLogin ? 'Login' : 'Signup'}
          </button>
          <p className="toggle-form" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Don’t have an account? Signup' : 'Already have an account? Login'}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
