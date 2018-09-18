import React from 'react'
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'found';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import routeConfig from './pages/Routes.jsx';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

const BrowserRouter = createBrowserRouter({ routeConfig });

ReactDOM.render(
  <Provider store= {store} >
    <BrowserRouter />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

Modal.setAppElement('#root');



