import React from 'react';
import { Link } from 'react-router';

function Login() {
  return (
    <>
      <h1>Log in</h1>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account?
        <Link to="/signup">Sign up</Link>
      </p>
      <p>
        <Link to="">Forgot password?</Link>
      </p>
    </>
  );
}

export default Login;
