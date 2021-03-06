import React from 'react';
import ReactDOM from 'react-dom';
import {
  Actions as FarceActions,
  BrowserProtocol,
  createHistoryEnhancer,
  queryMiddleware,
} from 'farce';
import {
  createConnectedRouter,
  createMatchEnhancer,
  createRender,
  foundReducer,
  Matcher,
  resolver,
} from 'found';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import routeConfig from './pages/Routes.jsx';
import reducers from './reducers/reducers.js';
import Modal from 'react-modal';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
/* ... */
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = {
  found: foundReducer,
  reducers,
};

const store = createStore(
  combineReducers(allReducers),
  composeEnhancers(
    createHistoryEnhancer({
      protocol: new BrowserProtocol(),
      middlewares: [queryMiddleware],
    }),
    createMatchEnhancer(
      new Matcher(routeConfig),
    ),
    applyMiddleware(thunk),
  ),
);

store.dispatch(FarceActions.init());

const ConnectedRouter = createConnectedRouter({
  render: createRender({
    renderError: ({ error }) => (
      <div>
        {error.status === 404 ? 'Not found' : 'Error'}
      </div>
    ),
  }),
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter resolver={resolver} />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

Modal.setAppElement('#root');


