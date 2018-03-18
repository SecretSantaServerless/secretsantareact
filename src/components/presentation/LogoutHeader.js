import React from 'react';
import Header from './Header';

const LogoutHeader = ({ logout }) => (
  <Header title="Welcome" action={logout} label="Log out" />
);

export default LogoutHeader;
