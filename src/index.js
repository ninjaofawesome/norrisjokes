import React from 'react'
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'found';
import Modal from 'react-modal';
import routeConfig from './pages/Routes.jsx';

import registerServiceWorker from './registerServiceWorker';

const BrowserRouter = createBrowserRouter({ routeConfig });

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));
registerServiceWorker();

