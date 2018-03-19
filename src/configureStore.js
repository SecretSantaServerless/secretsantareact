import wishesApp from './Reducers';
import { createStore } from 'redux';

const configureStore = () => {
  const store = createStore(wishesApp);

  store.subscribe(() => ({
    wishes: store.getState().wishes,
  }));

  return store;
};

export default configureStore;
