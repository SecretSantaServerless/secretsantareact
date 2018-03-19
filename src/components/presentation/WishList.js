import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    wishes: state.wishes,
  };
};

const WishList = ({ wishes }) => (
  <List>
    {wishes.map(wish => <List.Item key={wish.id}>{wish.text}</List.Item>)}
  </List>
);

export default connect(mapStateToProps, null)(WishList);
