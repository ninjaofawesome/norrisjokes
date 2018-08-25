import React from 'react'
import ReactDOM from 'react-dom';
import App from './pages/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

