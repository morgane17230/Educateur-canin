import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/store/reducers';
import event from './middlewares/event';
import presta from './middlewares/presta';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(event, presta),
);

const store = createStore(reducer, enhancers);

export default store;
