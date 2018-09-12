import React from 'react'
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'found';
import routeConfig from './pages/Routes.jsx';

import App from './pages/App/App.jsx';
import Categories from './pages/Categories/Categories.jsx';

import registerServiceWorker from './registerServiceWorker';

const BrowserRouter = createBrowserRouter({ routeConfig })

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));
registerServiceWorker();

