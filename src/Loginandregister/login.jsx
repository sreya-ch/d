import React from 'react';
import '../../src/App.css';

const Login = () => {
    return (
        <div className='register'>
    <div className="signup-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </div>  
      </form>
      
    </div>
    </div>
    );
}

export default Login;
