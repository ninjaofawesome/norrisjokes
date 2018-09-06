import React from 'react'
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  makeRouteConfig,
  Route,
} from 'found';

import App from './pages/App/App.jsx';
import Main from './pages/Main/Main.jsx';
import Categories from './pages/Categories/Categories.jsx';

import registerServiceWorker from './registerServiceWorker';

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route
     path='/'
     Component={Main}
    >
      <Route Component={App} />
      <Route 
        path='categories'
        Component={Categories} 
      />
    </Route>
  ),
  renderError: ({ error }) => (
    <div>
      {error.status === 404 ? 'Not found' : 'Error'}
    </div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));
registerServiceWorker();

