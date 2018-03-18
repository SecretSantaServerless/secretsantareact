import React from 'react';
import LogoutHeader from '../presentation/LogoutHeader';
import HomeBody from '../presentation/HomeBody';

export const Home = ({ auth }) => (
  <div>
    <LogoutHeader logout={auth.logout} />
    <HomeBody />
  </div>
);
