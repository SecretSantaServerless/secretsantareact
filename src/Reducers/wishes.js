import { Actions } from '../Actions';

const wish = (state, action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state;
  }
};

const wishes = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      return [...state, wish(undefined, action)];
    default:
      return state;
  }
};

export default wishes;
