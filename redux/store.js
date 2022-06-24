import {createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducers from './reducer/rootReducers';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
