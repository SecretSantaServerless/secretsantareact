import React from 'react';
import LoginHeader from '../presentation/LoginHeader';
import LoginBody from '../presentation/LoginBody';

export const Login = ({ auth }) => (
  <div>
    <LoginHeader login={auth.login} />
    <LoginBody />
  </div>
);
