import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreators } from '../../Actions';

const AddWish = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Input
        placeholder="I want..."
        ref={node => {
          input = node.inputRef;
        }}
      />
      <Button
        basic
        onClick={() => {
          dispatch(ActionCreators.addItem(input.value));
          input.value = '';
        }}
      >
        Add
      </Button>
    </div>
  );
};

AddWish.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddWish);
