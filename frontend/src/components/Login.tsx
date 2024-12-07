import React from 'react';

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
        <a href="">Sign up</a>
      </p>
      <p>
        <a href="">Forgot password?</a>
      </p>
    </>
  );
}

export default Login;
