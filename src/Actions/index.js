import { v4 } from 'node-uuid';

export const Actions = {
  ADD_ITEM: '[actions] add item',
};

export const ActionCreators = {
  addItem: text => ({
    type: Actions.ADD_ITEM,
    text,
    id: v4(),
  }),
};
