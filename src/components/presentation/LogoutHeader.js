import React from 'react';
import Header from './Header';
import { Icon } from 'semantic-ui-react';

const GiftIcon = () => <Icon name="gift" size="big" />;

const LogoutHeader = ({ logout }) => (
  <Header title={GiftIcon()} action={logout} label="Log out" />
);

export default LogoutHeader;
