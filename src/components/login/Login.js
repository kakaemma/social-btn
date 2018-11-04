import React from 'react';
import Googlelogin from './Google';
import Faceboook from './Facebook';

const Login = () => (
  <div>
    <h1>Login!</h1>
    <div>
      <Googlelogin />
      <br />
      <Faceboook />
    </div>
  </div>
);

export default Login;
