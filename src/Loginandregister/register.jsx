import React from 'react';
import '../../src/App.css';

const Register = () => {
  return (
    <div className='register'>
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <div className="form-group">
          <button type="submit">Signup</button>
        </div>
        <div className="link">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;
