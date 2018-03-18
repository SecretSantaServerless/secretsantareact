import React from 'react';
import Header from './Header';

const LoginHeader = ({ login }) => (
  <Header title="Gift Giver" action={login} label="Log out" />
);

export default LoginHeader;
