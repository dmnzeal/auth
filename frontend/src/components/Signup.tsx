import React from 'react';
import { Link } from 'react-router';

function Signup() {
  return (
    <>
      <h1>Sign Up</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm password" />
        <button type="submit">Sign up</button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">Log in</Link>
      </p>
    </>
  );
}

export default Signup;
